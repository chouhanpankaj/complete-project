<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use  App\Models\User;
use App\Models\UserRole;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        //validate incoming request 
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'phone' => 'string',
            'address' => 'string',
            'password' => 'required|confirmed'
        ]);

        try {

            $user = new User;
            $user->name = $request->input('name');
            $user->email = $request->input('email');
            $user->phone = $request->input('phone');
            $user->address = $request->input('address');
            $plainPassword = $request->input('password');
            $user->password = app('hash')->make($plainPassword);

            $user->save();

            $userrole = new UserRole;
            $userrole->user_id =  $user->id;
            $userrole->role = 2;
            $userrole->save();

            //return successful response
            return response()->json(['user' => $user, 'message' => 'CREATED'], 201);

        } catch (\Exception $e) {
            //return error message
            return response()->json(['message' => 'User Registration Failed!'], 409);
        }

    }

    public function login(Request $request) {

        $this->validate($request, [
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        $credentials = $request->only(['email', 'password']);

        if(! $token = Auth::attempt($credentials)) {
            return response()->json(['message' => 'login failed'], 401);
        }

        $user = Auth::user();
        
        $roleobj = $user->userroles;
        $loginrole = $request->input('role');

        if($roleobj->role != $loginrole) {
            return response()->json(['status'=>false, 'message'=>'you are not a valid user.']);
        }
        
        return $this->respondWithToken($token);
    }

}
