'use strict'

/*
Pedir 6 numeros e introducir en un array
Mostrar el array en la pagina y en consola
Ordenar array y mostrarlo
Invertir ordern y mostrarlo
Mostrar cuantos elementos tiene el array
Buscar de un valor introducido por el usuario y que diga el indice y si lo encuentra.
*/

function mostrarArray(elementos, textoComp = ""){
	document.write("<h1>Contenido del array "+textoComp+"</h1>");
	document.write("<ul>");
	elementos.forEach((elemento, index)=>{
		document.write("<li>"+elemento+"</li>");
	});
	document.write("</ul>");
}




var ind = 0;
var numArr = [];

while(ind <=5){
	var numero=parseInt(prompt("Introduzca un número entero: ", 0));
	if(!isNaN(numero)&& numero != null && numero >0){
		numArr.push(numero);
		ind++;
	}
}
console.log(numArr);

mostrarArray(numArr);

/*
document.write("<h1>Lista de Números</h1>")
for(var elemento in numArr){
	document.write(numArr[elemento]+",");
	console.log(numArr[elemento]);
}
*/                             
numArr.sort(function(a,b){return a-b});
mostrarArray(numArr,"ordenado ascendente");
/*
document.write("<h1>Lista de Números Ordenados</h1>")
for(var elemento in numArr){
	document.write(numArr[elemento]+",");
	console.log(numArr[elemento]);
}
*/
numArr.reverse();
mostrarArray(numArr,"ordenación descendiente");
/*
document.write("<h1>Lista de Números Ordenación descediente</h1>")
for(var elemento in numArr){
	document.write(numArr[elemento]+",");
	console.log(numArr[elemento]);
}
*/
document.write("<br/>El número de elemventos es: "+numArr.length);
/*
numArr.forEach((numero,index)=>{
	document.write("<strong>"+numero+"</strong><br/>");
});
*/
var valorBusqueda = parseInt(prompt("Introduzca número a buscar: ",0));

var busqueda=numArr.findIndex(valor => valor >= valorBusqueda);
console.log(busqueda);
if(busqueda >=0){
	var indF = numArr.indexOf(valorBusqueda);
	alert("El numero se ha encontrado en la posición "+indF);	
}else alert("El número no se ha encontrado");
console.log(numArr+" "+valorBusqueda);
 