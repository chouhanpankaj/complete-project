<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Order;
use App\Models\OrderDetail;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller {

    // add new product into order table.
    public function addOrder(Request $req) {

        $products = $req->input('products');
        $headers = $req->input('headers');
        
        error_log(json_encode($products));
        error_log(json_encode($headers));

        $total = 0;
        foreach($products as $p) {
            error_log($p['id']);
            error_log($p['qty']);
            $ob = Product::find($p['id']);
            $total += $ob->product_price * $p['qty'];
            error_log($total);
        }

        $user = Auth::user();
        $user_id = $user->id;
        error_log($user_id);

        $ob = new Order();
        $ob->users_id = $user_id;
        $ob->order_amount = $total;
        $ob->deliver_address = 'indore';
        $ob->save();

        $order_id = $ob->id;
        foreach($products as $p) {
            $obj = new OrderDetail();
            $obj->order_id = $order_id;
            $obj->product_id = $p['id'];
            $obj->save();

            if($ob->count() > 0)
            {
            return json_encode(array(
            "status"=>true,));
            }
            else
            {
            return json_encode(array(
            "status"=>false));
            }
        }
        // $ob = new Order();
        // $ob->customer_id = $req->input('customer_id');
        // $ob->order_amount = $req->input('order_amount');
        // $ob->deliver_address = $req->input('deliver_address');
        // $ob->save();
        // return "success";
    }

    // show list of all orders.
    public function listAllOrder(Request $req) {
        $ob = Order::orderBy('created_at', 'DESC')->get();
        return json_encode($ob);
    }

    //show list of all products py customer id.
    public function listOrderByCustomer(Request $req) {
        $id = $req->input('id');
        // $od = Order::where('id', $id)->first();
        $od = Order::find($id);
        // $od->customer;
        return json_encode($od);
    }

}