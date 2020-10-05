'use strict'

// mostrar todos los numeros divisores de un numero introducido en pantalla

var numero = parseInt(prompt("Introduce un número: ",1));

for(var i=0; i <= numero; i++)
{
	if(numero%i==0)
	{
		console.log("divisor del número "+numero+" ->",i);
	}
}