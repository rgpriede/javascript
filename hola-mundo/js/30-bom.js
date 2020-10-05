'use strict'

// browser objetc model

// window=screen
function getBom(){
	
	console.log(window.innerWidth);
	console.log(window.innerHeight);
	console.log(screen.width);
	console.log(screen.height);
	console.log(window.location);
	console.log(window.location.href);
}
getBom();


function abrirVentana(url){
	window.open(url);

}

/*
function urlChg(url){
	window.location.href = url;

}

urlChg("http://google.com");
*/