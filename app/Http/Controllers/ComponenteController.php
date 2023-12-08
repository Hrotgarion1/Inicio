<?php

namespace App\Http\Controllers;

use App\Models\Componente;
use Illuminate\Http\Request;
Use Inertia\Inertia;
use App\Models\Producto;

class ComponenteController extends Controller
{ 
    public $search;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //  $componentes = Componente::select('componentes.id', 'componentes.code', 'componentes.name', 'componentes.cant', 'componentes.ubica', 'producto_id', 'productos.code as producto')
        //  ->join('productos', 'productos.id', '=', 'componentes.producto_id')
        //  ->paginate(10);

        // $productos = Producto::all();

        // return Inertia::render('Componentes/Index', ['componentes' => $componentes, 'productos' => $productos]);


      
        return Inertia::render('Componentes/Index', ['componentes' => Componente::query()
        ->select('componentes.id', 'componentes.code', 'componentes.name', 'componentes.cant', 'componentes.ubica', 'componentes.stock')
        ->when($request->input('search'), function($query, $search) {
        $query->where('componentes.name', 'LIKE', '%'.$search. '%')
         ->orWhere('componentes.code', 'LIKE', '%'.$search . '%');
          })
          ->paginate(10)
          ->withQueryString(),
          'filters' => $request->only(['search']),


]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'code' => ['required', 'string', 'max:20', 'unique:componentes'],
            'name' => ['required', 'string', 'max:80'],
            'cant' => ['required', 'numeric', 'max:9999'],
            'ubica' => ['required', 'string', 'max:40'],
            'stock' => ['required', 'numeric', 'max:9999']
        ]);
        $componente = new Componente($request->input());
        $componente->save();
        return redirect('componentes');
    }

    /**
     * Display the specified resource.
     */
    public function show(Componente $componente)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Componente $componente)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $componente = Componente::find($id);

        $request->validate([
            'code' => 'required|string|max:20|unique:componentes,code,' . $id,
            'name' => ['required', 'string', 'max:80'],
            'cant' => ['required', 'numeric', 'max:9999'],
            'ubica' => ['required', 'string', 'max:40'],
            'stock' => ['required', 'numeric', 'max:9999'],

            [
                'code.unique' => 'El código ingresado ya está en uso. Por favor, elija otro.',  
            ]
        ]);
        $componente->update($request->input());
        return redirect('componentes');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Componente $componente)
    {
        //Proteccion que verifica que se tenga el permiso para eliminar el componente
        $this->authorize('eliminar componente');
        
        $componente->delete();
        return redirect('componentes');
    }

    public function reports(){
        $componentes = Componente::select('componentes.id', 'componentes.code', 'componentes.name', 'componentes.cant', 'componentes.ubica', 'componentes.stock')
        ->get();

        $productos = Producto::all();

        return Inertia::render('Componentes/Reports', ['componentes' => $componentes, 'productos' => $productos]);
    }
}
