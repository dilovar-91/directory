<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\Metro;
use App\Models\City;

class Listing extends Model
{
    protected $fillable = ['title', 'slug', 'description', 'properties', 'pictures', 'category_id'];
    protected $casts = [
        'properties' => 'array'
    ];
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

    public function setPropertiesAttribute($properties)
    {
        $values = [];

        foreach ($properties as $array_item) {
            if (!is_null($array_item['key'])) {
                $values[] = $array_item;
            }
        }

        $this->attributes['properties'] = json_encode($values);
    }
}
