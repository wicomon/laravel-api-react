<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DivisionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('divisions')->insert([
            'nombre' => 'Division uno',
            'div_superior' => 'superior uno',
            'subdivision' => 2,
            'nivel' => 1,
            'cantidad' => 26,
            'embajador' => 'primer embajador',
            'created_at'=> date('Y-m-d H:i:s'),
            'updated_at'=> date('Y-m-d H:i:s'),
        ]);

        DB::table('divisions')->insert([
            'nombre' => 'Division dos',
            'div_superior' => 'superior dos',
            'subdivision' => 13,
            'nivel' => 2,
            'cantidad' => 43,
            'embajador' => 'segundo embajador',
            'created_at'=> date('Y-m-d H:i:s'),
            'updated_at'=> date('Y-m-d H:i:s'),
        ]);

        DB::table('divisions')->insert([
            'nombre' => 'Division tres',
            'div_superior' => 'superior tres',
            'subdivision' => 5,
            'nivel' => 3,
            'cantidad' => 32,
            'embajador' => 'tercer embajador',
            'created_at'=> date('Y-m-d H:i:s'),
            'updated_at'=> date('Y-m-d H:i:s'),
        ]);
        DB::table('divisions')->insert([
            'nombre' => 'Division cuatro',
            'div_superior' => 'superior cuatro',
            'subdivision' => 8,
            'nivel' => 4,
            'cantidad' => 22,
            'embajador' => 'cuarto embajador',
            'created_at'=> date('Y-m-d H:i:s'),
            'updated_at'=> date('Y-m-d H:i:s'),
        ]);
        DB::table('divisions')->insert([
            'nombre' => 'Division cinco',
            'div_superior' => 'superior cinco',
            'subdivision' => 21,
            'nivel' => 5,
            'cantidad' => 212,
            'embajador' => 'quinto embajador',
            'created_at'=> date('Y-m-d H:i:s'),
            'updated_at'=> date('Y-m-d H:i:s'),
        ]);
        DB::table('divisions')->insert([
            'nombre' => 'Division seis',
            'div_superior' => 'superior seis',
            'subdivision' => 11,
            'nivel' => 6,
            'cantidad' => 84,
            'embajador' => 'sexto embajador',
            'created_at'=> date('Y-m-d H:i:s'),
            'updated_at'=> date('Y-m-d H:i:s'),
        ]);
    }
}
