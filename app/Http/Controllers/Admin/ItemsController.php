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
        $items = Item::where(['type'=>'Assembly'])->paginate(10); 
        return Inertia::render('Admin/ItemPage/Items', [
            'items' => $items,
        ]);
    }

    public function view(Request $request ,$id,$nsId)
    {
        $itemData = Item::where(['id' => $id, 'name' => $nsId])->first();

        return Inertia::render('Admin/ItemPage/ViewItem', [
            'itemData' => $itemData,
        ]);
    }
}
