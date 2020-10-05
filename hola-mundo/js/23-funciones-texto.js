'use strict'

// transformacion cadenas

var numero= 444;
var texto1="Bienvenido al curso";
var texto2="JavaScript";

var dato=numero.toString();
	dato=texto1.toUpperCase();
	dato=texto1.toLowerCase();

console.log(dato, typeof(dato));

var nombre="12";
console.log(nombre.length);

nombre=["uno", "dos"];
console.log(nombre.length);


var textoTotal = dato + texto1 + texto2;
console.log(textoTotal);

var textoDos = texto1.concat(" "+texto2);
console.log(textoDos);