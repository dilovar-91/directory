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
        ->with('city', 'metro')
        ->leftJoin('reviews', 'reviews.company_id', '=', 'companies.id')
        ->select(array('companies.*',
            DB::raw('CAST(AVG(rating) as UNSIGNED ) as ratings_average'),
            DB::raw('COUNT(reviews.id) AS review_count')
            ))        
        ->groupBy('companies.id')
        ->orderBy('ratings_average', 'DESC')
        ->paginate(6);
        return response()->json($results, 200);
               
    }


    public function getTopCompanies()
    {
       $results = Company::where('active', '=', '1')
	->with('city', 'metro', 'category')
	->leftJoin('reviews', 'reviews.company_id', '=', 'companies.id')
	->select(array('companies.*',
        DB::raw('CAST(AVG(rating) as UNSIGNED ) as ratings_average'),
        DB::raw('COUNT(reviews.id) AS review_count')
        ))
    //->select('COUNT(companies.id) as count')
	->groupBy('companies.id')
    ->orderBy('ratings_average', 'DESC')
    
	->paginate(20);
        return response()->json($results, 200);
        //dd($results);                
    }


    public function getCompaniesByCity($id)
    {
       $results = Company::where('active', '=', '1')->where('city_id', $id)
	->with('city', 'metro', 'category')
	->leftJoin('reviews', 'reviews.company_id', '=', 'companies.id')
	->select(array('companies.*',
        DB::raw('CAST(AVG(rating) as UNSIGNED ) as ratings_average'),
        DB::raw('COUNT(reviews.id) AS review_count')
        ))
    //->select('COUNT(companies.id) as count')
	->groupBy('companies.id')
    ->orderBy('ratings_average', 'DESC')
    
	->paginate(20);
        return response()->json($results, 200);
        //dd($results);                
    }

    

    public function getCompany($id)
    {
        $item = Company::with(['city', 'metro', 'category'])
        ->leftJoin('reviews', 'reviews.company_id', '=', 'companies.id')
        ->select(array('companies.*',
            DB::raw('CAST(AVG(rating) as UNSIGNED) as ratings_average')
            , DB::raw('COUNT(*) AS review_count')))             
        ->groupBy('companies.id')
        ->findOrFail($id);         
        return response()->json($item, 200);
    }

    public function searchCompanies(Request $request)
    {
        $keyword = $request->get('keyword');
        $query = Company::title($keyword)->with('city', 'metro')->orderBy('id', 'desc')->where('active', 1);
        $results = $query->paginate(6);
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
        return response()->json(City::where('name', 'like', "%$q%")->orderBy('order', 'asc')->get(), 200);
        //return City::where('name', 'like', "%$q%")->orderBy('order', 'asc')->paginate(20, ['id', 'name', 'pic', 'description', 'latitude', 'longitude']);
    }
    public function getCity($id)
    {        
        $city = City::findOrFail($id);         
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
    public function getCategories()
    {        
      return response()->json(Category::orderBy('order', 'asc')->limit(9)->get());
    }
}
