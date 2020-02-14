<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Category extends Model
{
        public function company()
    {
        return $this->hasOne(Company::class);
    }
}
