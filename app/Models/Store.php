<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;

    protected $fillable = [
        "internal_id",
        "store_code",
        "name",
        "top_level_parent",
        "parent_customer_id",
        "parent_customer_name",
        "company_name",
        "business_style",
        "ph_business_style",
        "status",
        "billing_address",
        "billing_city",
        "billing_state_or_province",
        "billing_zipcode",
    ];
    
}
