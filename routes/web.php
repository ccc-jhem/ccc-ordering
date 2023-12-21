<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\ItemsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('auth/login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Redirect to login page if accessing the root URL
Route::redirect('/', '/login');

Route::get('/restricted',  function(){
    return Inertia::render('RestrictedAccess');
})->middleware(['auth'])->name('not-verified');

Route::get('/not-verified-user',  function(){
    return Inertia::render('NotVerifiedUser');
})->middleware(['auth'])->name('not-verified');

// admin routes
Route::middleware(['auth', 'admin'])->group(function () {
    
    Route::get('/admin/dashboard', function(){
        return Inertia::render('Admin/Index');
    })->middleware(['auth'])->name('admin');

    Route::get('/admin/user-list', [UserController::class, 'index']);
    Route::get('/edit-user/{id}', [UserController::class, 'edit'])->name('edit-user');
    Route::put('/edit-user/{id}', [UserController::class, 'update'])->name('update-user');
    // Users controller

    Route::get('admin/item-list', [ItemsController::class, 'index']);
    Route::get('admin/view-item/{id}/{nsId}', [ItemsController::class, 'view'])->name('admin.view-item');
});


// sales rep Routes
Route::middleware(['auth', 'salesrep'])->group(function () {
    Route::get('/salesrep/dashboard', function(){
        return Inertia::render('SalesRep/Index');
    })->middleware(['auth'])->name('sales-rep');
});  

// promodiser Routes
Route::middleware(['auth', 'promo'])->group(function () {
    Route::get('/promo/dashboard', function(){
        return Inertia::render('Promodiser/Index');
    })->middleware(['auth'])->name('promo');

}); 

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
