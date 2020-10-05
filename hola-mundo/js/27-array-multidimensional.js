'use strict'

var categorias = ["Accion","Terror","Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran Torino"];

var cine = [categorias, peliculas];

console.log(cine);

console.log(cine[0][1]);
console.log(cine[1][2]);

peliculas.push("Batman");
console.log(peliculas);
do
{
	var elemento=prompt("Introduce Pelicula:");
	peliculas.push(elemento);  		// añade elemento al array
}while(elemento !="FIN")
peliculas.pop(); 					//elimina el último elemento
console.log(peliculas);


//borrar un elemento

var indice = peliculas.indexOf("La vida es bella");
if (indice > -1){
	peliculas.splice(indice, 1)   // borra el indice buscado y tantos elementos como se indica en el parametro 2 en este caso 1
}
console.log(peliculas);


// convertir array a un string

var newPeliculasStr=peliculas.join();
console.log(newPeliculasStr);

// convertir strin en array

var cadena="Texto1, Texto2, Texto3";
var cadena_arr=cadena.split(", ");

console.log(cadena_arr);

// ordenacion de un array

peliculas.sort();
console.log(peliculas);
peliculas.reverse();

for(var elemento in peliculas){
	console.log(elemento+" "+peliculas[elemento]);

}


//busquedas

var busqueda=peliculas.find(function(pelicula){
	return pelicula == "Gran Torino";
});
console.log(busqueda);

var busqueda=peliculas.find(pelicula => pelicula == "Gran Torino");

console.log(busqueda);

var busqueda=peliculas.findIndex(pelicula => pelicula == "Gran Torino");

console.log(busqueda);

// busca en un array de números si un valor es mayor menor igual etc...
var precios = [10,20,30,45,66];
var busqueda=precios.some(precio => precio >= 200);
console.log(busqueda);