'use strict'

// condicionales if
/*
	mayor >
	menor <
	igual ==
	mayor o igual >=
	menor o igual <=
	distinto !=
*/
var edad1 = 69;
var edad2 = 12;
var nombre = "Roberto Galán";

if(edad1 > edad2){
	console.log("Edad1 es mayor que edad 2");
}
else{
	console.log("Edad1 es inferior");
}

if(edad1 > 18){
	console.log("El usuario "+ nombre + ", es mayor de edad");
	if(edad1<65) console.log("estado activo")
	else if(edad1 >=70) console.log("jubilado");
		else console.log("eres mayor");
}else console.log("El usuario "+ nombre +", es menor de edad");

//operadores logicos  and &&  or ||  negacion !

//negacion
var year = 2018;
if(year != 2016){
	console.log("el año no es 2016 realmente es "+year);
}

if (year >=2000 && year <= 2020){
	console.log("Estamos en la era actual");
}
else {
	console.log("Estamos en la era post moderna");
}

// or
if(year == 2008 || year == 2018){
	console.log("Año acaba en 8");
}
else{
	console.log("Año no acaba en 8");
}

if(year ==2018 || (year>=2018 && year ==2028)){
	console.log("Año acaba en 8");
}else{
	console.log("Año no registrado.");
}


// condicional switch

