'use strict'

//arrays

var nombre = "Roberto Galán";
var nombres = ["Roberto Galán", "Angel Gutierrez"];

var lenguajes= new Array("PHP", "JS", "Go", "Java","c#");

console.log(nombres);
console.log(lenguajes);
console.log(nombres[1]);

console.log(nombres.length);

var elemento = parseInt(prompt("elemento a selecionar ",0));
alert(nombres[elemento]);

document.write("<h1>Lenguajes programacion 2020</h1>");

document.write("<ul>");
/*
for(var i=0; i < lenguajes.length; i++){
	document.write("<li>"+lenguajes[i]+"</li>");
}
*/

lenguajes.forEach((elemento, index, data) =>{
	console.log(data);
	document.write("<li>"+index+"."+elemento+"</li>");
});

document.write("</ul>");





