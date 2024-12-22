<?php
namespace App\Services;

use Illuminate\Support\Facades\DB;

class DatabaseManager
{
    /**
     * Maak een nieuwe PostgreSQL-database aan.
     *
     * @param string $databaseName
     * @return void
     */
    public static function createUserDatabase(string $databaseName)
    {
        try {
            DB::statement("CREATE DATABASE {$databaseName}");
        } catch (\Exception $e) {
            \Log::error("Fout bij het aanmaken van database {$databaseName}: " . $e->getMessage());
            throw $e;
        }
    }
}
