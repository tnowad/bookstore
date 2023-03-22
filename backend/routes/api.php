<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['prefix' => 'auth'], function () {
  Route::post('register', [RegisterController::class, 'register']);
  Route::post('login', [LoginController::class, 'login']);
  Route::post('logout', [LoginController::class, 'logout']);
  Route::post('refresh-token', [LoginController::class, 'refresh']);
  Route::get('user-profile', [LoginController::class, 'userProfile']);
});

Route::group(['prefix' => 'users'], function () {
  Route::get('/', [UserController::class, 'index']);
  Route::post('/', [UserController::class, 'create']);
  Route::get('/{id}', [UserController::class, 'show']);
  Route::put('/{id}', [UserController::class, 'update']);
  Route::delete('/{id}', [UserController::class, 'delete']);
});