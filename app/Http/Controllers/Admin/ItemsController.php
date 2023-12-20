<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Item;
use Inertia\Inertia;

class ItemsController extends Controller
{
    //
    public function index(Request $request)
    {
        $items = Item::paginate(10); 
        return Inertia::render('Admin/Items', [
            'items' => $items,
        ]);
    }


}
