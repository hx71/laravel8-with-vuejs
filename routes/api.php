<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController as Auths;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/auth/login', [Auths::class, 'login']);
Route::post('/auth/register', [Auths::class, 'register']);

Route::group(['prefix' => '', 'namespace' => 'App\Http\Controllers\Api',  'middleware' => 'auth:api'], function () {

    //     Route::get('/user/detail', [Api::class, 'detail']);
    Route::get('/auth/logout', [Auths::class, 'logout']);

    Route::group(['prefix' => '/'], function () {
        Route::resource('/users', 'UserController');
    });
});
