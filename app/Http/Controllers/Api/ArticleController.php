<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Models\Article;
use App\Http\Controllers\Controller;
//use App\Http\Resources\Review as ReviewResource;

class ArticleController extends Controller
{
    public function getArticle($slug)
    {         
        $article = Article::where('slug', $slug)->where('published', '1')->first();
        if (isset ($article)) {
            return response()->json($article, 200);
        }
        else return response()->json([], 200);
    }

    public function getArticles(Request $request)
    {
        $limit =$request->input('limit') ?? 6;  
        $articles = Article::orderBy('id', 'desc')->where('published', 1)->paginate($limit);            
        return response()->json($articles, 200);
    }
}
