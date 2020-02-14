<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Company;

class Metro extends Model
{
    protected $table = 'metro';
    public function company()
    {
        return $this->hasOne(Company::class);
    }
}
