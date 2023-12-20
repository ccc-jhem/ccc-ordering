<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Store;

class StoresSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Store::truncate();

        $csvFile = fopen(base_path("database/data/stores.csv"), "r");

        $firstline = true;
        while (($data = fgetcsv($csvFile, 6101, ",")) !== FALSE) {
            if (!$firstline) {
                Store::create([
                    "internal_id" => $data['0'],
                    "ns_id" => $data['1'],
                    "store_code" => $data['2'],
                    "name" => $data['3'],
                    "top_level_parent" => $data['4'],
                    "parent_customer_id" => $data['5'],
                    "parent_customer_name" => $data['6'],
                    "company_name" => $data['7'],
                    "business_style" => $data['8'],
                    "ph_business_style" => $data['9'],
                    "status" => $data['10'],
                    "billing_address" => $data['11'],
                    "billing_city" => $data['12'],
                    "billing_state_or_province" => $data['13'],
                    "billing_zipcode" => $data['14'],
                ]);    
            }
            $firstline = false;
        }

        fclose($csvFile);
    }
}
