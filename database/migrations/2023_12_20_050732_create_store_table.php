<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('stores', function (Blueprint $table) {
            $table->id();
            $table->string('internal_id');
            $table->string('ns_id');
            $table->string('store_code')->nullable();
            $table->string('name');
            $table->string('top_level_parent')->nullable();
            $table->string('parent_customer_id')->nullable();
            $table->string('parent_customer_name')->nullable();
            $table->string('company_name');
            $table->string('business_style');
            $table->string('ph_business_style');
            $table->string('status');
            $table->string('billing_address');
            $table->string('billing_city');
            $table->string('billing_state_or_province');
            $table->string('billing_zipcode');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('store');
    }
};
