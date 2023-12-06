<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    //
    public function index()
    {
        $users = User::where('role', '!=', 'admin')->get();
        
        return Inertia::render('Admin/Users', [
            'users' => $users,
        ]);
    }
}
