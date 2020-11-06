<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Order extends Model {
    
    protected $table = 'order';

    // product relationship with customer model.
    public function customer() {
        return $this->belongsTo("App\Models\Customer");
    }
    
    public function orderdetail() {
        return $this->hasMany('App\Models\OrderDetail');
    }
}