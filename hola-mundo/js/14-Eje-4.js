'use strict'

// mostrar todos los números impares entre dos proporcionados por teclado.

var numeroIni = parseInt(prompt("Introduce intervalo inicial: ",0));
var numeroFin = parseInt(prompt("Introduce intervalo final: ", 99));

document.write("<h3>Detalle de los numeros par/impar entre "+numeroIni+" y "+numeroFin+"</h3>");
for(var i = numeroIni; i <=numeroFin; i++)
{
	if(i%2 == 0)
	{
		document.write("<p>"+i+" es par</p>");
	}else document.write("<p>"+i+" es impar</p>");
}
// otra forma

while(numeroIni < numeroFin)
{
	if(numeroIni%2 == 1)
	{
		console.log("Numero es impar:", numeroIni);
	}
	numeroIni++;
}