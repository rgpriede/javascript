'use strict'

var texto = "";
function holaMundo(texto){
	console.log(texto+" "+numero);
}

texto="Hola mundo soy una variable global";
var numero= 12;
console.log(numero.toString());
holaMundo(texto);