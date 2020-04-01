<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Listing;
use App\Models\City;
use Illuminate\Support\Facades\DB;

class ListingController extends Controller
{
    public function getCompany($id)
    {
        $item = Listing::with(['city', 'metro', 'category'])
        ->leftJoin('reviews', 'reviews.company_id', '=', 'listings.id')
        ->select(array('listings.*',
            DB::raw('CAST(AVG(rating) as UNSIGNED) as avg_rating')
            ,DB::raw('COUNT(rating) AS review_count')))             
        ->groupBy('listings.id')
        ->findOrFail($id);         
        return response()->json($item, 200);
    }
    public function store(Request $request)
    {
        $listing = Listing::create($request->all());
        return response()->json($listing, 201);
    }
}
