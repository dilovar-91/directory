<?php
namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;
class Company extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,            
            'city' => $this->city->name,            
            'metro' => $this->metro->name,
            'pictures' => $this->picture,            
            'description' => $this->description, 
            'adress' => $this->adress, 
            'tell' => $this->tell, 
            'website' => $this->website, 
            'job_schedule' => $this->job_schedule, 
            'email' => $this->email,                          
        ];
    }
}