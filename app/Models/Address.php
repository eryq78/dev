<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'address_line_1',
        'address_line_2',
        'city',
        'state',
        'zip',
        'country_code',
        'phone',
        'tax_number',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}