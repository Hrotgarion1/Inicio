<?php

namespace App\Http\Controllers\Seguridad;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
Use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UsersController extends Controller
{
    public $search;

    public function index(Request $request)
    {
        return Inertia::render('Users/Index', ['users' => User::with('roles')->when($request->input('search'), function($query, $search) {
            $query->where('name', 'LIKE', '%'.$search. '%')->orWhere('email', 'LIKE', '%'.$search . '%');
        })->paginate(10)->withQueryString(),'filters' => $request->only(['search'])
    ]);
    }

    public function create()
    {
        return Inertia::render('Users/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            
            'name' => ['required', 'string', 'max:80'],
            'email' => ['required', 'string', 'email', 'max:80'], // Corregir esta línea
            'role' => ['required', 'string'], 
            
        ]);
        $user = new User($request->input());
        $user->save();
        return redirect('users');
    }

    public function edit(User $user)
    {
        return Inertia::render('Users/Edit', ['user' => $user]);
    }

    public function update(Request $request, User $user)
    {
        $request->validate([
            
            'name' => ['required', 'string', 'max:80'],
            'email' => ['required', 'string', 'email', 'max:80'], // Corregir esta línea
            'role' => ['required', 'string'], // Asegúrate de validar el rol
            
        ]);
        $user->update($request->all());
        return redirect('users');
    }

    public function destroy(User $user)
    {
        $user->delete();
        return redirect('users');
    }

}
