'use strict'
// tipo de datos y operadores (+,-,*,/,%)

alert("operadores y tipo de datos");
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 * numero2;

console.log("el resultado de la operacion es "+ operacion);

//tipos de datos

// entero string flotante booleano array objets
var numero_entero=44;
var cadena_texto= "Hola que tal";
var verdadero_falso = true;
var numero_flotante = 12.5;

// convertir datos

var numer_t = "12.33";
var numero_conv = Number(numer_t);

console.log(numer_t);
console.log(numero_conv);

console.log(parseInt(numer_t));
console.log(parseFloat(numer_t));

console.log(String(numer_t)+7);  //al convertir en string contatena los valores -> resultado 12.337


//conocer el tipo de dato

console.log(typeof numero_flotante);
console.log(typeof verdadero_falso);