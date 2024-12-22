<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SetUserDatabase
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = Auth::user();

        if ($user && $user->database_name) {
            // Stel dynamisch de database in
            DB::purge('pgsql'); // Verwijder de huidige verbinding

            config(['database.connections.pgsql.database' => $user->database_name]);

            DB::reconnect('pgsql'); // Maak opnieuw verbinding met de aangepaste instellingen
        }

        return $next($request);
    }
}
