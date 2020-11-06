<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    // Save new category in category table.    
    public function saveCategory(Request $req)
    {
        $ob = new Category();
        $ob->category_name = $req->input('category_name');
        // $ob->status = $req->input('status');
        $ob->save();
        // return 'success';
        return json_encode(['status'=>true]);
    }

    // show list of category by given status
    public function listCategoryByStatus(Request $req)
    {
        $status = $req->input('status');
        $list = Category::where('status', $status)->get();
        return json_encode($list);    
    }

    // show category by with specific category id
    public function getCategoryById(Request $req)
    {
        $id = $req->input('id');
        // $get = Category::where('id', $id)->first();
        $get = Category::find($id);
        return json_encode($get);
    }

    //change status of any category with category id
    public function changeStatusWithCategoryId(Request $req)
    {
        $id = $req->input('id');
        $status = $req->input('status');
        $ob = Category::find($id);
        $ob->status = $status;
        $ob->save();
        return 'success';
    }

    public function listCategory()
    {
        $list = Category::where('status',1)->orderBy('created_at', 'DESC')->get();
        return json_encode($list);    
    }


}
