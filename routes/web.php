<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//login page
Route::get('/', function () {
    return view('auth.login');
});

Auth::routes();

//pasien route
Route::group(['prefix' => 'pasien', 'middleware' => 'auth'], function() {
    Route::get('home', 'PasienHomeController')->name('pasien.index');
});

//admin route
