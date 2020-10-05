'use strict'

let fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
console.log(fecha);
let textoHora = `
	El Año es: ${year}
	El mes es: ${mes}
	El día es: ${dia}
	${Math.random()}
`;
alert(textoHora);