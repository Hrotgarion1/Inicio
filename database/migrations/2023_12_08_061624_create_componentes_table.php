<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('componentes', function (Blueprint $table) {
            $table->id();
            $table->string('code',20)->unique();
            $table->string('name',80);
            $table->double('cant', 10, 2); // 10 dígitos en total, 2 decimales
            $table->string('ubica',40);
            $table->double('stock', 10, 2); // 10 dígitos en total, 2 decimales
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('componentes');
    }
};
