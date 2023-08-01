<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', function (){
    return response()->json([
        'aloooo'
    ]);
});


Route::get('/contatos', function (){

    $data = DB::select('SELECT * FROM TB_contatos');
    return $data;
});


Route::post('/inserir', function(Request $request){
    $return = DB::insert('INSERT INTO TB_contatos (nome, telefone, whatsapp, email)
     VALUES(?,?,?,?)', [$request['nome'], $request['telefone'], $request['whatsapp'], $request['email']]);

   return  $return;

});

Route::post('/editar', function(Request $request){
    $return = DB::update(
        'UPDATE TB_contatos SET
        nome = ?,
        telefone = ?,
        whatsapp = ?,
        email = ?
        WHERE id = ?', [$request['nome'], $request['telefone'], $request['whatsapp'], $request['email'], $request['id']]);

   return  $return;

});

Route::post('/delete', function(Request $request){
    $return = DB::delete(
        'DELETE FROM TB_contatos
        WHERE id = ?', [$request['id']]);

   return  $return;

});



