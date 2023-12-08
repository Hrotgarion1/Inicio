<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Seguridad;
use Inertia\Inertia;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\ComponenteController;
use App\Http\Controllers\Seguridad\RolesController;
use App\Http\Controllers\Seguridad\UsersController;
use Illuminate\Support\Facades\Session;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth:sanctum', config('jetstream.auth_session'),'verified',
])->group(function () {
    Route::get('/dashboard', function () { return Inertia::render('Dashboard'); })->name('dashboard');

    Route::get('productos/create', [ProductoController::class, 'create'])
    ->middleware(['check.permission'])
    ->name('productos.create');

    Route::resource('productos', ProductoController::class);
    Route::resource('componentes', ComponenteController::class);
    Route::get('reports', [ComponenteController::class, 'reports'])->name('reports');
});

//Ruta protegida por el middleware CheckPermission que otorga permiso solo al rol admin
Route::middleware(['App\Http\Middleware\CheckPermission:admin'])->group(function () {
    Route::resource('users', UsersController::class);
    Route::resource('roles', RolesController::class);
    Route::get('permisos', [Seguridad\PermisosController::class, 'index'])->name('permisos.index');
});

//Ruta para los idiomas
Route::get('/language/{language}', function($language){
    Session::put('locale', $language);
    return redirect()->back();
})->name('language');
