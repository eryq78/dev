<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserDataController;
use Illuminate\Support\Facades\DB;

// Standaard route
Route::get('/', function () {
    return view('welcome');
});

Route::get('/test-db', function () {
    try {
        config(['database.connections.pgsql.database' => 'postgres']);
        DB::purge('pgsql');

        DB::connection('pgsql')->statement("CREATE DATABASE user_19");
        return response()->json(['success' => true, 'message' => 'Database user_17 succesvol aangemaakt.']);
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()]);
    }
});

// Nieuwe route voor het dashboard
Route::get('/dashboard', [UserDataController::class, 'index']);