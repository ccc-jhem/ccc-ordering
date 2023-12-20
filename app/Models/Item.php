<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $fillable = [
        'internal_id', 'name','display_name','description','type','sales_type','category','sub_category',
        'profit_center','brand'
    ];
}
