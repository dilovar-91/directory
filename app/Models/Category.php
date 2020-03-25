<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Listing;


class Category extends Model
{
    public function company()
    {
        return $this->hasOne(Company::class);
    }
    
    public function listings()
    {
        return $this->hasMany(Listing::class);
    }
}
