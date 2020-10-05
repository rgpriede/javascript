'use strict'

/*
Calculadora
controlar los números errores
mostrar consola y body el resultado de sumar restar multiplicar dividir
*/

do
{
	var numero1=parseInt(prompt("Introduce un numero positivo:",0));
	var numero2=parseInt(prompt("Introduce otro número positivo:", 0));

}while(isNaN(numero1)|| isNaN(numero2)|| numero1==null || numero2==null ||numero1 <=0|| numero2 <=0)

document.write("<h2>Operaciones aritméticas con los números ("+numero1+","+numero2+")</h2>");
document.write("Suma           :"+(numero1+numero2)+"<br/>");
document.write("Resta          :"+(numero1-numero2)+"<br/>");
document.write("Multiplicacion :"+(numero1*numero2)+"<br/>");
document.write("Division :"+(numero1/numero2));

var resultado = "<h2>Operaciones aritméticas con los números ("+numero1+","+numero2+")</h2>" +
				"Suma           :"+(numero1+numero2)+"<br/>"+
				"Resta          :"+(numero1-numero2)+"<br/>"+
				"Multiplicacion :"+(numero1*numero2)+"<br/>"+
				"Division :"+(numero1/numero2)
var resultado2 = "Operaciones aritméticas con los números ("+numero1+","+numero2+")\n" +
				"Suma           :"+(numero1+numero2)+"\n"+
				"Resta          :"+(numero1-numero2)+"\n"+
				"Multiplicacion :"+(numero1*numero2)+"\n"+
				"Division :"+(numero1/numero2)
document.write(resultado);
alert(resultado2);
console.log(resultado2);