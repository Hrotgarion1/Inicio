<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;
    protected $fillable = ['code','name','cant','stock','ubica','util','sitio','descript'];

    //dentro del parentesis le paso el modelo con el que quiero que se relacione
    public function componiendo()
    {
    return $this->hasMany(Componente::class);
    }
}
