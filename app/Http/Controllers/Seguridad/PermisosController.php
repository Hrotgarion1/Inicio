<?php

namespace App\Http\Controllers\Seguridad;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class PermisosController extends Controller
{
    public function index(){

        //Este metodo trae solo los campos que yo necesito
        $permisos = Permission::select('id', 'name')->orderByDesc('id')->paginate(5);
        //Este metodo trae todos los campos Id, name etc...
        //$permisos = Permission::all();
        return Inertia::render('Permisos/Index', compact('permisos'));
    }
}
