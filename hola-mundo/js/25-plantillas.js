'use strict'

//Plantillas de texto

var nombre = prompt("Introduce Nombre: ");
var apellidos = prompt("Introduce Apellidos: ");

var texto = "Mi nombre es "+nombre+" y mis apellidos "+apellidos;


var texto=`
	<h1>Hola que tal</h1>
	<h3>Nombre es ${nombre}</h3>
	<h3>Apellidos son ${apellidos}</h3>
`


document.write(texto);