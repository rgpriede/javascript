'use strict'

// Local Storage

window.addEventListener('load', ()=>{
	// comprobar si localstorage esta disponible
	if(typeof(Storage) !=='undefined'){
		console.log("LocalStorage disponible");
	} else console.log("LocalStorage NO DISPONIBLE");
	//guardatos en localstorage
	localStorage.setItem("titulo","Curso de ABAP");
	//recuperar elemento localstorage
	document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");
	//guardar objeto JSON
	var usuario = {
		nombre: "Roberto Galán",
		email: "personal@robgalpr.es",
		web: "robgalpr.es"
	};
	localStorage.setItem("usuario", JSON.stringify(usuario));
	//recuperar objeto
	var userJS=JSON.parse(localStorage.getItem("usuario"));
	console.log(userJS.web);
	document.querySelector("#datos").innerHTML = userJS.nombre+" - "+userJS.web; 

	//borrar elementos - todo
	localStorage.removeItem("usuario");
	localStorage.clear();
});