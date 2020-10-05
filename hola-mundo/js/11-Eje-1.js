'use strict'

// pedir dos números e informar cual es mayor menor o igual

do
{
	do
	{
		var numero1=prompt("1 Introduce un valor mayor a 0: ", 0);
		var numero2=prompt("2 Introduce un valor mayor a 0: ", 0);
		console.log(numero1, numero2);
	} while(parseInt(numero1)<=0 || parseInt(numero2)<=0|| isNaN(numero1)|| isNaN(numero2) || numero1 == null || numero2 == null)
	if(parseInt(numero1) == parseInt(numero2)){
		alert("Los números 1 y dos son iguales ("+numero1+","+numero2+")");
	}else if(parseInt(numero1) > parseInt(numero2)){
		alert("El número 1 ("+numero1+") es mayor que numero 2 ("+numero2+")");
	}else alert("El número 2 ("+numero2+") es mayor que numero 1 ("+numero1+")");
	var respuesta = confirm("Quieres repetir.");
} while(respuesta== true)