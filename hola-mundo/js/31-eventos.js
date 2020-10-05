'use strict'

//eventos.

// raton
window.addEventListener('load', ()=>{  // para que se carge despues de cargar todo html

	var boton = document.querySelector("#boton1");

	function cambiarColor(){
		
		var bg=boton.style.background;
		console.log("he pasado");

		if(bg == "green"){
		  boton.style.background="red";
		}else boton.style.background="green";

		boton.style.padding = "10px";
		boton.style.border = "1px solid #ccc";

		return true;
	}

	var boton = document.querySelector("#boton");
	boton.addEventListener("click", function(){
		cambiarColor();
		boton.style.border= "10px solid black";
		this.style.background ="grey";
	});

	//mouse over

	boton.addEventListener('mouseover',function(){
		boton.style.background ="yellow";
	});

	//mouse out
	boton.addEventListener('mouseout',function(){
		boton.style.background ="#ccc";
	});

	// focus

	var campo = document.querySelector("#campo_nombre");
	campo.addEventListener('focus', function(){
		console.log("[focus] estas haciendo foco en el campo");
	});


	// blur
	var campo = document.querySelector("#campo_nombre");
	campo.addEventListener('blur', function(){
		console.log("[blur] estas fuera del campo");
	});


	// keydown
	var campo = document.querySelector("#campo_nombre");
	campo.addEventListener('keydown', function(event){
		console.log("[keydown] estas pulsando esta tecla "+String.fromCharCode(event.keyCode));
	});
	// keypress
	var campo = document.querySelector("#campo_nombre");
	campo.addEventListener('keypress', function(event){
		console.log("[keypress] tecla presionada "+String.fromCharCode(event.keyCode));
	});

	// keyup
	var campo = document.querySelector("#campo_nombre");
	campo.addEventListener('keyup', function(event){
		console.log("[keyup] tecla soltada "+String.fromCharCode(event.keyCode));
	});

});