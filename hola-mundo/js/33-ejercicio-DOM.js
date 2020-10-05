'use strict'
window.addEventListener('load',function(){
	console.log("DOM Cargado");
	var formulario=document.querySelector("#formulario");
	var boxDashed=document.querySelector(".dashed");
	boxDashed.style.display="none";
	formulario.addEventListener("submit",function(){
		console.log("Evento submit capturado");
		var nombre=document.querySelector("#i_nombre").value;
		var apellidos=document.querySelector("#i_apellidos").value;
		var edad=parseInt(document.querySelector("#i_edad").value);

		if(nombre.trim()==null || nombre.trim().length == 0){
			document.getElementById("i_nombre").placeholder="Introduzca Nombre...";
			return false;
		}
		if(apellidos.trim()==null || apellidos.trim().length == 0){
			document.getElementById("i_apellidos").placeholder="Introduzca Apellidos...";
			return false;
		}
		if(edad==null || edad <= 0|| isNaN(edad)){
			document.getElementById("i_edad").placeholder="Introduzca Edad...";
			return false;
		}
		boxDashed.style.display="block";
		
		var p_nombre=document.querySelector("#p_nombre spam");
		var p_apellidos=document.querySelector("#p_apellidos spam");
		var p_edad=document.querySelector("#p_edad spam");
		p_nombre.innerHTML= nombre;
		p_apellidos.innerHTML= apellidos;
		p_edad.innerHTML=edad;


		/*
		var datosUsuario =[nombre,apellidos,edad];
		var indice;
		for(indice in datosUsuario){
			var parrafo=document.createElement("p");
			parrafo.append(datosUsuario[indice]);
			boxDashed.append(parrafo);
		};
		*/

		
	});
});