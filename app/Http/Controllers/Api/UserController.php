<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserValidator;
use App\Models\User;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $data =  User::paginate(5);
            return UserResource::collection($data);
        } catch (\Exception $e) {
            $message = $e->getMessage() . ' in file :' . $e->getFile() . ' line: ' . $e->getLine();
            return response()->json($message);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserValidator $request)
    {
        try {
            $model = $request->all();
            $model['password'] = Hash::make($model['password']);
            $data = User::create($model);
            return response()->json([
                'message' => 'success',
                'data' => new UserResource($data)
            ]);
        } catch (\Exception $e) {
            $message = $e->getMessage() . ' in file :' . $e->getFile() . ' line: ' . $e->getLine();
            return response()->json($message);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $data = User::find($id);
            return new UserResource($data);
        } catch (\Exception $e) {
            $message = $e->getMessage() . ' in file :' . $e->getFile() . ' line: ' . $e->getLine();
            return response()->json($message);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserValidator $request, $id)
    {
        try {
            $model = $request->all();
            $model['password'] = Hash::make($model['password']);
            $data = User::find($id);
            $data->update($model);
            return response()->json([
                'message' => 'success',
                'data' => new UserResource($data)
            ]);
        } catch (\Exception $e) {
            $message = $e->getMessage() . ' in file :' . $e->getFile() . ' line: ' . $e->getLine();
            return response()->json($message);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $data = User::find($id);
            $data->delete();
            return response()->json([
                'message' => 'success',
                'data' => new UserResource($data)
            ]);
        } catch (\Exception $e) {
            $message = $e->getMessage() . ' in file :' . $e->getFile() . ' line: ' . $e->getLine();
            return response()->json($message);
        }
    }
}
