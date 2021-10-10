<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function login(Request $request)
    {
        // try {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $success['token'] = $user->createToken('MyApp')->accessToken;
            $data = [
                'token' => $success['token'],
                'data' => [
                    'email' => $user->email,
                    'name' => $user->name
                ],
                // 'role' => $user->role->role_name,
            ];
            return response()->json($this->getRespon($data, 200, "login successfull"));
        } else {
            return response()->json($this->getRespon(null, 204, "user not found"));
        }
        // } catch (\Exception $e) {
        //     return response()->json($this->getRespon(null, 500, "errors"));
        // }
    }

    public function register(Request $request)
    {
        try {
            $model = $request->all();
            $model['password'] = Hash::make($model['password']);
            $data = User::create($model);
            if ($data) {
                return response()->json($this->getRespon($data, 200, "register successfull"));
            } else {
                return response()->json($this->getRespon(null, 204, "register failed"));
            }
        } catch (\Exception $e) {
            return response()->json($this->getRespon(null, 500, "errors"));
        }
    }

    public function logout()
    {
        try {
            $user = Auth::user()->token();
            $user->revoke();
            return response()->json($this->getRespon(null, 200, "successfull logged out"));
        } catch (\Exception $e) {
            return response()->json($this->getRespon(null, 500, "error"));
        }
    }

    public function getRespon($data = null, $code, $message)
    {
        return ["code" => $code, "message" => $message, "data" => $data];
    }
}
