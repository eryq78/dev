<?php

namespace App\Helpers;

use Illuminate\Support\Facades\DB;

class DatabaseHelper
{
    /**
     * Stel de databaseverbinding dynamisch in voor een gebruiker.
     *
     * @param string $databaseName
     * @return void
     */
    public static function setUserDatabaseConnection(string $databaseName)
    {
        config(['database.connections.user_specific' => [
            'driver' => 'pgsql',
            'host' => env('DB_HOST'),
            'port' => env('DB_PORT'),
            'database' => $databaseName,
            'username' => env('DB_USERNAME'),
            'password' => env('DB_PASSWORD'),
            'charset' => 'utf8',
            'prefix' => '',
            'schema' => 'public',
        ]]);

        DB::purge('user_specific');
        DB::reconnect('user_specific');
    }
}
