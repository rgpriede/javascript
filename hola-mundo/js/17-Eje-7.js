'use strict'

// tabla de muliplicar de un número introducido por pantalla.

var numero = parseInt(prompt("Introduzca un número: ",0));

document.write("<h1>Tabla de multiplicar del "+numero+"</h1>");
for(var i =1; i<=10; i++)
{
	document.write("<p>"+numero+" x "+i+"= "+i*numero);
}