<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class UserDataController extends Controller
{
    /**
     * Toon het dashboard met gebruikersspecifieke data.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        // Controleer of de gebruiker is ingelogd
        $user = Auth::user();

        if (!$user) {
            return redirect('/')->with('error', 'Je moet ingelogd zijn om toegang te krijgen tot het dashboard.');
        }

        // Haal data op uit de gebruikersspecifieke database
        $data = DB::connection('user_specific')
            ->table('some_table') // Vervang 'some_table' door een tabelnaam in je dynamische database
            ->get();

        // Retourneer de view met de opgehaalde data
        return view('user.dashboard', ['data' => $data]);
    }
}
