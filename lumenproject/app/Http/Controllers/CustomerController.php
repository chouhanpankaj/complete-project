<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\User;

class CustomerController extends Controller
{
    // save new customer into customer table.    
    public function saveCustomer(Request $req)
    {
        $ob = new Customer();
        $ob->customer_name = $req->input('customer_name');
        $ob->customer_email = $req->input('customer_email');
        $ob->customer_phone = $req->input('customer_phone');
        $ob->customer_address = $req->input('customer_address');
        $ob->customer_pass = $req->input('customer_pass');
        // $ob->verifystatus = $req->input('vstatus');
        // $ob->activestatus = $req->input('astatus');
        $ob->save();
        // return 'success';
        return json_encode(['status'=>true]);
    }

    //show customer detail of given customer id.
    public function showCustomerById(Request $req)  
    {
        $id = $req->input('id');
        // $show = Customer::where('id', $id)->first();
        $show = Customer::find($id);
        return json_encode($show);
    }

    //customer login with given email and password.
    public function customerLogin(Request $req)
    {
        $email = $req->input('email');
        $pass = $req->input('pass');

        $login = Customer::where([['customer_email', $email], ['customer_pass', $pass]])->first();
        if($login->count()>0)
        {
            return json_encode(['status'=>true, 'data'=>$login]);
        }
        else
        {
            return json_encode(['status'=>false, 'data'=>$login]);
        }
    }
    
    public function showCustomer() {
        $list = User::orderBy('activestatus', 'DESC')->get();
        return json_encode($list);
    }


}
