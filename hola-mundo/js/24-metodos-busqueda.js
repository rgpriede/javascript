'use restric'

//metodos busquedas en un string 
var numero=44;
var texto1="Bienvenido al curso de JavaScript de Victor Robles curso";
var texto2="                  es muy   buen    curso";

var busqueda= texto1.indexOf("curso");
console.log(busqueda);

var busqueda= texto1.lastIndexOf("curso");
console.log(busqueda);

var busqueda= texto1.search("curso");
console.log(busqueda);

var busqueda= texto1.match(/curso/g);
console.log(busqueda);

var busqueda= texto1.substr(14,5);  // devuelve n caracteres desde una posicion data
console.log(busqueda);

var busqueda= texto1.charAt(44);  // devuelve el caracter indicado
console.log(busqueda);

var busqueda= texto1.startsWith("Bi");  // busca desde el inicio
console.log(busqueda);

var busqueda= texto1.includes("JavaScript"); // devulve true false si existe
console.log(busqueda);

var busqueda= texto1.replace("JavaScript", "Sinphony"); // cambia
console.log(busqueda);


var busqueda= texto1.slice(14,20); // extrae los caracteres indicados
console.log(busqueda);

var busqueda= texto1.split(" "); // crea registros por un separador dado.
console.log(busqueda);

var busqueda= texto2.trim(); // quita los spacios de una cadena de texto (delante y detrás no en medio)
console.log(busqueda);




