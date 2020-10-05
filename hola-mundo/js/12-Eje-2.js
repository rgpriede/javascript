'use strict'

// bucle mostrar media hasta que se introduzca un valor negativo.

var i=0;
var numero=0;
var media=0;
var totGen=0;

do
{
	do
	{
	//numero=0;
	numero=parseInt(prompt("Introduzca un valor (negativo para terminar):", 0));
	console.log(i, numero);
	}while(isNaN(numero)|| numero == null )
	console.log("fuera del do..while"+i+" "+numero);
	if(numero<0)
	{
		alert("La media es :"+totGen/i+" de los "+i+" la suma es: "+totGen+" numeros introducidos.")                    
	}else {
		i++;
		totGen+=numero;
		//media=totGen/i;
		console.log(i, totGen, media);                      
	}
	//debugger;
} while(numero >= 0)
