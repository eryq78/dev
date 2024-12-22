<?php

namespace App\Observers;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class UserObserver
{
    public function created(User $user)
    {
        Log::info("UserObserver aangeroepen voor gebruiker: {$user->id}");

        $databaseName = 'user_' . $user->id;

        try {
            Log::info("Poging om database aan te maken: {$databaseName}");

            config(['database.connections.pgsql.database' => 'postgres']);
            DB::purge('pgsql');

            $exists = DB::connection('pgsql')
                ->select("SELECT 1 FROM pg_database WHERE datname = ?", [$databaseName]);

            if (!empty($exists)) {
                Log::warning("Database {$databaseName} bestaat al.");
                return;
            }

            DB::connection('pgsql')->statement("CREATE DATABASE {$databaseName}");
            Log::info("Database {$databaseName} succesvol aangemaakt.");

            $user->database_name = $databaseName;
            $user->save();
        } catch (\Exception $e) {
            Log::error("Fout bij het aanmaken van de database: " . $e->getMessage());
        }
    }
}
