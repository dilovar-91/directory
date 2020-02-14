<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Review;
use App\Models\Company;

use App\Http\Controllers\Controller;
use App\Http\Resources\Review as ReviewResource;

class ReviewController extends Controller
{
    public function getReviews($id)
    {         
       
        return ReviewResource::collection(Review::all()->where('company_id', $id)->where('published', '1')->sortByDesc('created_at'));
    }

    public function getAllReviews($page=1)
    {  
        
        $results = \DB::table('reviews')
            ->join('companies', 'companies.id', '=', 'reviews.company_id')
            ->select('reviews.id')
            ->selectRaw('reviews.title')
            ->selectRaw('reviews.author')
            ->selectRaw('reviews.text')
            ->selectRaw('reviews.pros')
            ->selectRaw('reviews.cons')
            ->selectRaw('reviews.rating')
            ->selectRaw('reviews.created_at')
            ->selectRaw('reviews.company_id')            
            ->selectRaw('companies.title as company' )
            ->selectRaw('reviews.recomend_count')
            ->where('reviews.published', '1')
            ->orderBy('reviews.created_at', 'desc')			
            ->paginate(10);
		return response()->json($results, 200);
        
    }
    //return ReviewResource::collection(Review::with('company.title')->where('published', '1')->orderBy('created_at', 'desc')->paginate(10));
    public function setrating(Request $request){
        $Review  = new Review; 
        $Review->company_id = $request->post('company_id');
        $Review->title = $request->post('title');
        $Review->author = $request->post('author');
        $Review->rating = $request->post('rating');
        $Review->text = $request->post('text');
        $Review->pros = $request->post('pros');
        $Review->cons = $request->post('cons');              
        $Review->save();
        return response()->json($Review, 201);
    }
}
