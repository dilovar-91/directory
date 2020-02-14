<?php
namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;
class Review extends JsonResource
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
            
            'author' => $this->author,
            'title' => $this->title,
            'company' => $this->company,
            'company_id' => $this->company_id,
            'pros' => $this->pros,
            'cons' => $this->cons,
            'recomend_count' => $this->recomend_count,
            'rating' => $this->rating,
            'text' => $this->text,
            'created_at' => $this->created_at
            //'email' => $this->email            
        ];
    }
}