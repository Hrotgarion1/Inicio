<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;
Use Inertia\Inertia;

class ProductoController extends Controller
{
    public $search;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // $productos = Producto::select('id', 'code','name','cant','ubica','util','sitio','descript')->orderByDesc('id')->paginate(3);
        return Inertia::render('Productos/Index', [
            'productos' => Producto::query()
                ->when($request->input('search'), function($query, $search) {
                    $query->where('name', 'LIKE', '%'.$search. '%')
                    ->orWhere('code', 'LIKE', '%'.$search . '%')
                    ->orWhere('util', 'LIKE', '%'.$search . '%');
                })
                ->paginate(10)
                ->withQueryString(),
                'filters' => $request->only(['search'])
    ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //Este $this->authorize('crear producto'); me asegura que la ruta create solo es utilizada por los usuarios con el rol que tiene 
        //el permiso para crear productos
        $this->authorize('crear producto');
        return Inertia::render('Productos/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'code' => ['required', 'string', 'max:20', 'unique:productos'],
            'name' => ['required', 'string', 'max:80'],
            'cant' => ['required', 'numeric', 'max:9999'],
            'stock' => ['required', 'numeric', 'max:9999'],
            'ubica' => ['required', 'string', 'max:40'],
            'util' => ['required', 'string', 'max:10'],
            'sitio' => ['required', 'string', 'max:40'],
            'descript' => ['required', 'string', 'max:200']
        ]);
        $producto = new Producto($request->input());
        $producto->save();
        return redirect('productos');
    }

    /**
     * Display the specified resource.
     */
    public function show(Producto $producto)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Producto $producto)
    {
        return Inertia::render('Productos/Edit', ['producto' => $producto]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $producto = Producto::find($id);

        $request->validate([
            'code' => 'required|string|max:20|unique:productos,code,' . $id,
            'name' => ['required', 'string', 'max:80'],
            'cant' => ['required', 'numeric', 'max:9999'],
            'stock' => ['required', 'numeric', 'max:9999'],
            'ubica' => ['required', 'string', 'max:40'],
            'util' => ['required', 'string', 'max:10'],
            'sitio' => ['required', 'string', 'max:40'],
            'descript' => ['required', 'string', 'max:200'],

            [
              'code.unique' => 'El código ingresado ya está en uso. Por favor, elija otro.',  
            ]
        ]);
        $producto->update($request->all());
        return redirect('productos');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Producto $producto)
    {
        //Proteccion que verifica que se tenga el permiso de eliminar productos
        $this->authorize('eliminar producto');

        $producto->delete();
        return redirect('productos');
    }
}
