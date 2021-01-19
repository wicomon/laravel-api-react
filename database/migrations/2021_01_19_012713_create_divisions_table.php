<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDivisionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('divisions', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 45)->unique();//nombre unico y no mayor a 45 caracteres
            $table->string('div_superior')->nullable();//division superior, puede tener o no 
            $table->string('subdivision');//subdivisiones 
            $table->integer('nivel');
            $table->integer('cantidad');
            $table->string('embajador');//embajador designado nombre completo
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('divisions');
    }
}
