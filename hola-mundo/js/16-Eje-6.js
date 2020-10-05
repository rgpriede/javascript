'use strict'

// indicar si un numero es par o impar
// prompt -> comprobar si el número no es valido pedir de nuevo
// mostrar si es par o impar.

do
{
	var numero=parseInt(prompt("Introduzca un número positivo: ", 1));
}while(isNaN(numero)|| numero==null)
if(numero%2==0)
{
	alert("El número introducido es PAR");
}else alert("El número introducido es IMPAR");
