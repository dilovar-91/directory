<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\City;

class Region extends Model
{
    public function cities()
    {
        return $this->hasMany(City::class);
    }
}
