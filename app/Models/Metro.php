<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Company;
use App\Models\Listing;

class Metro extends Model
{
    protected $table = 'metro';
    public function company()
    {
        return $this->hasOne(Company::class);
    }
    public function listing()
    {
        return $this->hasOne(Listing::class);
    }
}
