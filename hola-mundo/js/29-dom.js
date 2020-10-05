'use strict'

//dom

function cambiaColor(color){
	caja.style.background= color;
}

//var caja=document.getElementById("micaja");
var caja = document.querySelector("#micaja");


caja.innerHTML="TEXTO CAMBIADO";
//caja.style.background="red";
caja.style.padding = "20px";
caja.style.color="white";
cambiaColor("blue");
caja.className="hola hola2";

console.log(caja); 


//CONSEGUIR TODOS LOS ELEMENTOS DE LA PAGINA POR ETIQUETA
var todosDiv = document.getElementsByTagName("div");

var valor;
for(valor in todosDiv){
	console.log(valor);
	if(typeof todosDiv[valor].textContent=='string'){
	
	var parrafo = document.createElement("p");
	var texto = document.createTextNode(todosDiv[valor].textContent);
	parrafo.append(texto);  //se puede usar parrafo.prepend(texto);
	document.querySelector("#miseccion").prepend(parrafo);
	}
}

console.log(todosDiv);

var contenido=todosDiv[2];
//console.log(contenido);
//cambiar el texto div 2
contenido.innerHTML = "Cambio texto elemento";
contenido.style.background = "green";

var divRojo = document.getElementsByClassName("rojo");
divRojo[0].style.background="red";
divRojo[1].style.background="red";

//otra forma de hacerlo

var divRojos = document.getElementsByClassName("uno");
var div;

for(div in divRojos){
	if(divRojos[div].className=="uno"){
		console.log(divRojos[div]);
		divRojos[div].style.fontSize = "20px";
		divRojos[div].innerHTML ="OTRO CAMBIO DE TEXTO";
		divRojos[div].style.fontFamily="verdana";
	}
}

//querySelector solo funciona con un elemento no genera un array con los registros.

var id = document.querySelector("#encabezado");
var valorClase = document.querySelector("div.rojo");
console.log(valorClase);
// todos los elementos

var valorClase = document.querySelectorAll("div.rojo");
console.log(valorClase);






