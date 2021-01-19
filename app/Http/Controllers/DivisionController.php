<?php

namespace App\Http\Controllers;

use App\Division;
use Illuminate\Http\Request;

class DivisionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $divisiones = Division::all();

        return response()->json($divisiones);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $div = new Division();
        $div->nombre = $request->nombre;
        $div->div_superior = $request->div_superior;
        $div->subdivision = $request->subdivision;
        $div->nivel = $request->nivel;
        $div->cantidad = $request->cantidad;
        $div->embajador = $request->embajador;


        $div->save();
        return $div;
    }

    public function show(Request $request)
    {
        $div = Division::findOrFail($request->id);
        // $div = Division::where('id', $request->id)->get();
        return response()->json($div);
    }


    public function edit(Division $division)
    {
        //
    }


    public function update(Request $request, Division $division)
    {
        $div = Division::findOrFail($request->id);

        $div->nombre = $request->nombre;
        $div->div_superior = $request->div_superior;
        $div->subdivision = $request->subdivision;
        $div->nivel = $request->nivel;
        $div->cantidad = $request->cantidad;
        $div->embajador = $request->embajador;


        $div->save();

        return $div;
    }

    public function destroy(Request $request)
    {
        $div = Division::destroy($request->id);
        return $div;
    }
}
