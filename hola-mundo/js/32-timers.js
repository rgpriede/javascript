'use strict'

window.addEventListener('load',()=>{

	//timers
	function intervalo(){
		var tiempo1= setInterval(function(){
			
			var encabezado = document.querySelector("h1");
			if(encabezado.style.fontSize == "50px"){
				encabezado.style.fontSize="20px";
			} else encabezado.style.fontSize="50px";

			console.log("Set interval ejecutado");

		},3000);
		return tiempo1;
	}

	var tiempoA = intervalo();

	var tiempo= setTimeout(function(){    //Ejecuta solo una vez
		
		var encabezado = document.querySelector("h2");
		if(encabezado.style.fontSize == "50px"){
			encabezado.style.fontSize="20px";
		} else encabezado.style.fontSize="50px";

		console.log("Set interval ejecutado");

	},5000);

	var parar = document.querySelector("#stop");
	parar.addEventListener('click', function(){
		clearInterval(tiempoA);
		alert("Has parado el intervalo en bucle");	
	});

	var iniciar = document.querySelector("#start");
	iniciar.addEventListener('click', function(){
		alert("Has iniciado el intervalo en bucle");	
		tiempoA =intervalo();
	});
});
