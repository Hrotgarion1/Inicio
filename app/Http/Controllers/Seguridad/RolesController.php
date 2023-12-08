<?php

namespace App\Http\Controllers\Seguridad;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class RolesController extends Controller
{
    public function index(){
        $roles = Role::select('id', 'name')->with('permissions')->orderByDesc('id')->paginate(10);
        return Inertia::render('Roles/Index', compact('roles'));

    }

    public function store(Request $request){

        $request->validate([
            
            'name' => ['required', 'string', 'max:80'],

        ]);
        $role = new Role($request->input());
        $role->save();
        return redirect('roles');
    }

    public function update(Request $request, Role $role){

        $request->validate([
            
            'name' => ['required', 'string', 'max:80'],
            
        ]);
        $role->update($request->input());
        return redirect('roles');

    }
}
