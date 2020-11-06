<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Product extends Model {
    
    protected $table = 'product';

    // product relationship with category model.
    public function category() {
        return $this->belongsTo("App\Models\Category");
    }

    public function orderDetail() {
        return $this->hasmany('App\Models\OrderDetail');
    }

}