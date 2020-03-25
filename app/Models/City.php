<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Company;
use App\Models\Region;

class City extends Model
{
    
    public function companies()
    {
        return $this->hasMany(Company::class);
    }

    public function region()
    {
        return $this->belongsTo(Region::class,);
    } 
}
