<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Review;
use App\Models\City;
use App\Models\Metro;
use App\Models\Category;

class Company extends Model
{
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class, 'city_id');
    }  
    
    public function scopeTitle($query,$keyword)
    {        
        return $query->where('title', 'LIKE', '%' . $keyword . '%');        
    }
    public function scopeFindByCategorySlug($query, $categorySlug)
    {        
        return $query->whereHas('category', function ($query) use ($categorySlug) {
            $query->where('slug', $categorySlug);
        });        
    }

    public function metro()
    {
        return $this->belongsTo(Metro::class, 'metro_id');
    } 

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    } 
    
    public function scopeAvgReview($query){
       
        return $query->where('company_id', $company->id)->avg('rating');
        
    }


    public function scopeCity($query,$city)
    {
        if(!Empty($city)){
            return $query->where('city_id',$city);
        }
        return $query;
    }


    public function setPicturesAttribute($pictures)
    {
        if (is_array($pictures)) {
            $this->attributes['pictures'] = json_encode($pictures);
        }
    }

    public function getPicturesAttribute($pictures)
    {
        return json_decode($pictures, true);
    }
    
}

