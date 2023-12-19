<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    //
    public function index()
    {
        $users = User::where('role', '!=', 'admin')->get(); // You can adjust the number of items per page as needed
        return Inertia::render('Admin/Users', [
            'users' => $users,
        ]);
    }


    public function edit(Request $request,$id)
    {
        $userData = User::find($id);
        return Inertia::render('Admin/EditUser', [
            'userData' => $userData,
        ]); 
    }


    public function update(Request $request, $id)
    {
        try {
            DB::beginTransaction();
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email,' . $id,
                'role' => 'required|string',
                'status' => 'required|string',
            ]);

            $user = User::findOrFail($id);
            $user->update($validatedData);

            DB::commit();
            return response()->json(['message' => 'User updated successfully']);
        } catch (ValidationException $e) {
            DB::rollBack();
            return response()->json(['errors' => $e->validator->errors()], 422);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => 'Failed to update user.'], 500);
        }
    }

}