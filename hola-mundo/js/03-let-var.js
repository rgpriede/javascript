'use strict'

// diferencias entre var y let para definir variables

alert("Hola");
var numero=40;
console.log(numero);

if(true)
{
	var numero=50;
	console.log(numero);
}
console.log(numero);

var texto="Curso JS";
console.log(texto);
if (true){
	let texto="Texto 2";  // crea el valor para el bloque if en este caso.
	console.log(texto);
}
console.log(texto);