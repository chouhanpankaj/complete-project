<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class customer extends Model {
    
    protected $table = 'customer';
    
    protected $attributes = [
        'verifystatus' => false,
        'activestatus' => true,
    ];

    public function order() {
        return $this->hasmany('App\Models\Order');
    }

}