<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/divisiones', 'DivisionController@index');
Route::get('/divisiones/{id}','DivisionController@show');
Route::put('/divisiones/actualizar', 'DivisionController@update');
Route::post('/divisiones/guardar', 'DivisionController@store');
Route::delete('/divisiones/borrar/{id}', 'DivisionController@destroy');