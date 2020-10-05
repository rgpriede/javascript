'use strict'

//mostrar todos los números comprendidos entre dos introducidos por pantalla.

var numeroIni = parseInt(prompt("Introduzca número inicial: ",0));
var numeroFin = parseInt(prompt("Introduzca número final  : ", 10));

document.write("<h2>De"+numeroIni+" a "+numeroFin+" están los siguientes números:</h2>");
for(var i=numeroIni; i <= numeroFin; i++)
{
	document.write("<p>"+i+"</p>");
}