<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Contracts\Support\Jsonable;
use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Category;
use App\Models\City;
use App\Models\Metro;
use App\Models\Review;
use App\Models\Region;
use App\Http\Resources\Company as CompanyResource;
use Illuminate\Support\Facades\DB;


class CompanyController extends Controller
{
    public function __construct(){
        $this->content = array();
    }

    public function getCompanies()
    {
        //$results = Company::with('city', 'metro')->orderBy('id', 'desc')->where('active', 1)->paginate(6);

            $results = Company::where('active',1)
        ->with('city', 'metro', 'category')
        ->leftJoin('reviews', 'reviews.company_id', '=', 'companies.id')
        ->select(array('companies.*',
            DB::raw('CAST(AVG(rating) as UNSIGNED ) as avg_rating'),
            DB::raw('COUNT(reviews.id) AS review_count')
            ))        
        ->groupBy('companies.id')
        ->orderBy('avg_rating', 'DESC')
        ->paginate(12);
        return response()->json($results, 200);
               
    }


    public function getTopCompanies()
    {
       $results = Company::where('active', '=', '1')
	->with('city', 'metro', 'category')
	->leftJoin('reviews', 'reviews.company_id', '=', 'companies.id')
	->select(array('companies.*',
        DB::raw('CAST(AVG(rating) as UNSIGNED ) as avg_rating'),
        DB::raw('COUNT(reviews.id) AS review_count')
        ))
    //->select('COUNT(companies.id) as count')
	->groupBy('companies.id')
    ->orderBy('avg_rating', 'DESC')
    
	->paginate(20);
        return response()->json($results, 200);
    }

    public function getRelatedCompanies(Request $request)
    {
       $title = $request->get('title');
       $results = Company::where('active', '=', '1')
       ->whereRaw("MATCH(title, description)AGAINST('$title' IN BOOLEAN MODE)")
       ->with('category', 'city', 'metro')
	    ->paginate(8);
        return response()->json($results, 200);
    
    }
    
    public function getCompaniesByCity($id)
    {
       $results = Company::where('active', '=', '1')->where('city_id', $id)
	->with('city', 'metro', 'category')
	->leftJoin('reviews', 'reviews.company_id', '=', 'companies.id')
	->select(array('companies.*',
        DB::raw('CAST(AVG(rating) as UNSIGNED ) as avg_rating'),
        DB::raw('COUNT(reviews.id) AS review_count')
        ))
	->groupBy('companies.id')
    ->orderBy('avg_rating', 'DESC')    
	->paginate(20);
        return response()->json($results, 200);
    }

    

    public function getCompany($id)
    {
        $item = Company::with(['city', 'metro', 'category'])
        ->leftJoin('reviews', 'reviews.company_id', '=', 'companies.id')
        ->select(array('companies.*',
            DB::raw('CAST(AVG(rating) as UNSIGNED) as avg_rating')
            ,DB::raw('COUNT(rating) AS review_count')))             
        ->groupBy('companies.id')
        ->findOrFail($id);         
        return response()->json($item, 200);
    }

    public function searchCompanies(Request $request)
    {
        $keyword = $request->get('keyword');
        $category = ($request->get('category') > 0 ? $request->get('category') : '');
        $city = ($request->get('city') > 0 ? $request->get('city') : '');
        $query = Company::title($keyword)->category($category)->city($city)->with('city', 'metro', 'category')->orderBy('id', 'desc')->where('active', 1);
        $results = $query->paginate(12);
        //return CompanyResource::collection($results); 
        return response()->json($results, 200);
    }

    public function getAllCoords()
    {
        $query = DB::table('companies')->select('id','title', 'pic', 'adress', 'latitude', 'longitude', 'slug')->orderBy('id', 'desc')->where('active', 1);
        $results = $query->get();
        //return CompanyResource::collection($companies);  
        return response()->json($results, 200);
        //return $results->toJson();               
    }

    public function getImage ($image){        
        $url = "/nuxt/static/img/company/".$image;
        $image = base_path($url);        
        if(file_exists($image)) {
            $finfo = finfo_open(FILEINFO_MIME_TYPE);
            $mime = finfo_file($finfo, $image);
            finfo_close($finfo);
            header("Content-Type: $mime");
            readfile($image);
        }
        else return abort(404);
    }

    public function cities(Request $request)
    {
        $q = $request->get('q');
        return response()->json(City::where('name', 'like', "%$q%")->orderBy('order', 'asc')->paginate(20), 200);
        //return City::where('name', 'like', "%$q%")->orderBy('order', 'asc')->paginate(20, ['id', 'name', 'pic', 'description', 'latitude', 'longitude']);
    }
    public function getCity($slug)
    {        
        $city = City::where('slug', 'like', $slug)->orWhere('id', $slug)->first();         
        return response()->json($city, 200);
    }

    public function metro(Request $request)
    {
        $q = $request->get('q');
        return Metro::where('name', 'like', "%$q%")->paginate(null, ['id', 'name']);
    }

    public function companies(Request $request)
    {
        $q = $request->get('q');
        return Company::where('title', 'like', "%$q%")->paginate(null, ['id', 'title']);
    }

    public function getCompaniesByCategory(Request $request, $slug)
    {        
        //return Company::FindByCategorySlug($slug)->with('city', 'metro', 'category')->paginate(12);
        $page = $request->input('page');  
        $sort = $request->input('sort');        
        $category_id = $request->input('category');        
        $order = "";
        switch ($sort) {
            case 'rating':
                $order = ['avg_rating', 'desc'];
                break;
            case 'name':
                $order = ['title', 'asc'];
                break;
            case 'name-desc':
                $order = ['title', 'desc'];
                break;
            case 'comments':
                $order = ['review_count', 'desc'];
                break;
            default: $order = ['id', 'desc'];
        }
        
        $companies = Company::FindByCategorySlug($slug)->with('metro', 'city', 'category')
        ->withCount(['reviews as avg_rating' => function($query) {
        $query->select(DB::raw('avg(rating)'));
        $query->where('published', '=', 1);
    }])
    ->withCount(['reviews as review_count' => function($query) {
        $query->where('published', 1);    
    }])
    ->orderBy(...$order)     
    ->paginate(12);   
    return $companies;     

    }
    public function getCompaniesByCitySlug(Request $request, $citySlug)
    {    
        $page = $request->input('page');  
        $sort = $request->input('sort');
        $category_id = $request->input('category');        
        $order = "";
        switch ($sort) {
            case 'rating':
                $order = ['avg_rating', 'desc'];
                break;
            case 'name':
                $order = ['title', 'asc'];
                break;
            case 'name-desc':
                $order = ['title', 'desc'];
                break;
            case 'comments':
                $order = ['review_count', 'desc'];
                break;
            default: $order = ['id', 'desc'];
        }
        $companies = Company::FindByCitySlug($citySlug)->with('metro', 'city', 'category')
        //->where('category_id', $category_id)
        ->when(!empty($category_id) , function ($query) use($category_id){
            return $query->where('category_id',$category_id);
            })
        ->withCount(['reviews as avg_rating' => function($query) {
        $query->select(DB::raw('avg(rating)'));
        $query->where('published', '=', 1);
    }])
    ->withCount(['reviews as review_count' => function($query) {
        $query->where('published', 1);    
    }])
    ->orderBy(...$order)     
    ->paginate(12);   
    return $companies;     
    }
    
    

    public function getCities()
    {
       $results = City::with('region')->withCount('companies')->paginate(150);
        return response()->json($results, 200);
    }
    
}
