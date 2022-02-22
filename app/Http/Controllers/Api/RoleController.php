<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\RoleValidator;
use App\Http\Resources\RoleResource;
use App\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $data =  Role::paginate(5);
            return RoleResource::collection($data);
        } catch (\Exception $e) {
            $message = $e->getMessage() . ' in file :' . $e->getFile() . ' line: ' . $e->getLine();
            return response()->json($message);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RoleValidator $request)
    {
        try {
            $model = $request->all();
            $data = Role::create($model);
            return response()->json([
                'message' => 'success',
                'data' => new RoleResource($data)
            ]);
        } catch (\Exception $e) {
            $message = $e->getMessage() . ' in file :' . $e->getFile() . ' line: ' . $e->getLine();
            return response()->json($message);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $data = Role::find($id);
            return new RoleResource($data);
        } catch (\Exception $e) {
            $message = $e->getMessage() . ' in file :' . $e->getFile() . ' line: ' . $e->getLine();
            return response()->json($message);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RoleValidator $request, $id)
    {
        try {
            $model = $request->all();
            $data = Role::find($id);
            $data->update($model);
            return response()->json([
                'message' => 'success',
                'data' => new RoleResource($data)
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
            $data = Role::find($id);
            $data->delete();
            return response()->json([
                'message' => 'success',
                'data' => new RoleResource($data)
            ]);
        } catch (\Exception $e) {
            $message = $e->getMessage() . ' in file :' . $e->getFile() . ' line: ' . $e->getLine();
            return response()->json($message);
        }
    }
}
