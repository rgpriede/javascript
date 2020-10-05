'use strict'

// parametros rest y spread

function listadoFrutas(fruta1,fruta2, ...resto_de_frutas){
	console.log("fruta1"+fruta1);
	console.log("fruta2"+fruta2);
	console.log("resto "+resto_de_frutas);
}

listadoFrutas("Naranja","Manzana","Pera","Sandia","Piña","Coco");
var frutas=["Naranja","Manzana","Pera","Sandia","Piña","Coco"]
listadoFrutas(...frutas);