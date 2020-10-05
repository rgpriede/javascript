'use strict'

window.addEventListener('load', ()=>{

	//var formulario = document.querySelector("#formPeliculas");
	var formulario = document.getElementById('formPeliculas');
	//console.log(typeof formuario);
	formulario.addEventListener('submit', function(){
		var titulo =document.querySelector('#addpelicula').value;
		if(titulo.length >0) localStorage.setItem(titulo,titulo);
	});
	// mostrar peliculas
	let ul=document.querySelector('#peliculasList');
	for(let i in localStorage){
		//console.log(localStorage[i]);
		if(typeof localStorage[i]=='string'){
			let li =document.createElement("li");

			li.append(localStorage[i]);
			ul.append(li);
		};
	};
	var formulariob = document.querySelector('#delPeliculas');
	//console.log(typeof formuario);
	formulariob.addEventListener('submit', function(){
		var titulo =document.querySelector('#delPelicula').value;
		if(titulo.length >0) localStorage.removeItem(titulo);
	});
});