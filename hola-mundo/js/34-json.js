'use strict'

//JSON javascript object notation


window.addEventListener('load', ()=>{

	var pelicula = {
		titulo: 'Batman',
		year: 2017,
		pais: 'Estados Unidos'
	};


	var peliculas = [
		{titulo: 'La verdad duele', year: 2016, pais: 'Francia'},
		pelicula
	];

	pelicula.titulo = "ET";

	var index;
	var cajaPelicula = document.querySelector("#peliculas");
	for(index in peliculas){
		var p = document.createElement("p");
		p.append(peliculas[index].titulo+"  "+peliculas[index].year);
		cajaPelicula.append(p);

	};
});