<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Contracts\Support\Jsonable;
use App\Http\Controllers\Controller;
use App\Models\Category;

class CategoryController extends Controller
{
    public function getCategoryBySlug($slug)
    {
        $item = Category::where('slug', 'like', $slug)->orWhere('id', $slug)->first();         
        return response()->json($item, 200);
    }

    public function getCategories(Request $request)
    {
      $limit = $request->get('limit') ?? 9;     
      return response()->json(Category::orderBy('order', 'asc')->limit($limit)->get());
    }
}
