<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller {

    // save new product into proudct table.
    public function saveProduct(Request $req) {

        $ob = new Product();
        $ob->category_id = $req->input('category_id');
        $ob->product_name = $req->input('product_name');
        $ob->product_price = $req->input('product_price');
        $ob->product_desc = $req->input('product_desc');

        $file = $req->file('product_image');
        $ext = $file->getClientOriginalExtension();
		$time = strtotime(date('Y-m-d H:i:s'));
        $filename = "$time.$ext";
        
        $ob->product_image = $filename;
        $file->move("uploads",$filename);

        $ob->save();
        // return "success";
        return json_encode(['status'=>true]);
    }

    // shows list of all products with category name.
    public function listAllProducts(Request $req) {
        // $status = $req->input('status');
        // $ob = Product::where('status', $status)->get();
        $ob = Product::orderBy('created_at','DESC')->all();
        return json_encode($ob);
    }
    
    public function listAllPro() {
        // $status = $req->input('status');
        // $ob = Product::where('status', $status)->get();
        $ob = Product::all();
        return json_encode($ob);
    }

    //shows product with given id.
    public function getProductById(Request $req) {
        $id = $req->input('id');
        // error_log("recieved id  >> $id");
        $ob = Product::where('id', $id)->first();
        // return json_encode($ob);
        return json_encode(['status'=>true, 'data'=>$ob]);
    }

    //show list of products by category.
    public function productsListByCategoryId(Request $req) {
        $id = $req->input('id');
        $ob = Product::where('category_id', $id)->get();
        return json_encode($ob);
    }

    public function uploadFile(Request $req) 
    {
      
        $id = $req->input('id');
        $file = $req->file('image');

        $ext = $file->getClientOriginalExtension();
		$time = strtotime(date('Y-m-d H:i:s'));
        $filename = "$time.$ext";        
        
        $file->move("uploads",$filename);

        $ob = Product::where('id', $id)->first();
        
        $ob['product_image'] = $filename;
        $ob->save();

        return json_encode(['pid'=>$id, 'status'=>true]);
    }

}
