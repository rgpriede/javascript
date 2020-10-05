'use strict'

//switch

var edad = 40;
var imprime = "";

switch(edad)
{
	case 18:
		imprime = "acabas de cumplir la mayoría de edad";
	break;
	case 25:
		imprime = "Ya eres un adulto";
	break;
	case 40:
		imprime = "crisis de los cuarenta";
	break;
	case 75:
		imprime = "anciano";
	break;
	default:
		imprime = "Tu edad es neutra";
	break;
}
console.log(imprime);