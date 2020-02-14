<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Models\Article;
use App\Http\Controllers\Controller;
//use App\Http\Resources\Review as ReviewResource;

class ArticleController extends Controller
{
    public function getArticle($id)
    {         
        $article = Article::where('id', $id)->where('published', '1')->get();
        if (isset ($article)) {
            return response()->json($article, 200);
        }
        else return response()->json([], 200);
    }

    
    public function getArticles()
    {
        $articles = Article::orderBy('id', 'desc')->where('published', 1)->paginate(6);            
        return response()->json($articles, 200);
               
    }
}
