<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\Metro;
use App\Models\City;

class Listing extends Model
{
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    } 
    public function metro()
    {
        return $this->belongsTo(Metro::class);
    }
    public function city()
    {
        return $this->belongsTo(City::class, 'city_id');
    } 
    public function getPropertiesAttribute($properties)
    {
        return json_decode($properties, true);
    }
    public function getPicturesAttribute($pictures)
    {
        return json_decode($pictures, true);
    }
}
