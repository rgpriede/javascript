'use strict'

//funciones: agrupacion reutilizable de un conjunto de instrucciones

function porConsola(numero1,numero2){
		console.log("suma "+(numero1+numero2));
		console.log("resta "+(numero1-numero2));
		console.log("smultiplicacion "+(numero1*numero2));
		console.log("division "+(numero1/numero2));
}

function porPantalla(numero1,numero2){
		document.write("<br/>suma "+(numero1+numero2));
		document.write("<br/>resta "+(numero1-numero2));
		document.write("<br/>smultiplicacion "+(numero1*numero2));
		document.write("<br/>division "+(numero1/numero2));
}
function calculadora(numero1, numero2, mostrar = false)
{
	if(mostrar==false)
	{
		console.log("suma "+(numero1+numero2));
		console.log("resta "+(numero1-numero2));
		console.log("smultiplicacion "+(numero1*numero2));
		console.log("division "+(numero1/numero2));
	}else{
		document.write("<br/>suma "+(numero1+numero2));
		document.write("<br/>resta "+(numero1-numero2));
		document.write("<br/>smultiplicacion "+(numero1*numero2));
		document.write("<br/>division "+(numero1/numero2));
	}

	//return numero1+numero2;
}
calculadora(12,4, true);
calculadora(12,12);
porConsola(12,4);
porPantalla(4,2);