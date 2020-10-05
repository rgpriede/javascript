'use strict'

// funciones anonimas : es una funcion sin nombre

var pelicula = function(nombre){
	return "La pelicula es "+ nombre;
}

function sumame(num1,num2, sumaYmuestra, sumaPorDos){
	var sumar= num1+num2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}


sumame(2,5, function(dato){
	console.log("La suma es: ", dato);
},
function(dato){
	console.log("la suma por dos es: ", (dato*2));
});
// funciones de flecha, es lo mismo anterior pero cambiando function por una flecha
sumame(2,5, dato =>{
	console.log("La suma es: ", dato);
},
dato =>{
	console.log("la suma por dos es: ", (dato*2));
});
