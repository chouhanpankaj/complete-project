<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model {
    
    protected $table = 'orderdetails';

    public function order() {
        return $this->belongsTo('App\Models\order');
    }

    public function product() {
        return $this->belongsTo('App\Models\product');
    }
    
}