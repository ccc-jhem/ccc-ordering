<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Item;

class ItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Item::truncate();

        $csvFile = fopen(base_path("database/data/items.csv"), "r");

        $firstline = true;
        while (($data = fgetcsv($csvFile, 4568, ",")) !== FALSE) {
            if (!$firstline) {
                Item::create([
                    "internal_id" => $data['0'],
                    "name" => $data['1'],
                    "display_name" => $data['2'],
                    "description" => $data['3'],
                    "type" => $data['4'],
                    "sales_type" => $data['5'],
                    "category" => $data['6'],
                    "sub_category" => $data['7'],
                    "profit_center" => $data['8'],
                    "brand" => $data['9']
                ]);    
            }
            $firstline = false;
        }

        fclose($csvFile);
    }
}
