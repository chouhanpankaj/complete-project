<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\OrderDetail;

class OrderDetailController extends Controller {
    
    public function listByOrderId(Request $req) {
        $id = $req->input('id');
        $ob = OrderDetail::where('order_id', $id)->get();
        return json_encode($ob);
    }

    public function listByProductId(Request $req) {
        $id = $req->input('id');
        $ob = OrderDetail::where('product_id', $id)->get();
        return json_encode($ob);
    }
}