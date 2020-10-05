'use strict'
$(document).ready(function(){
	console.log("Ready")
	// selector id
	$("#p1").css("background","red")
			.css("color", "white")
	$("#p2").css("font-size", "40px")
	$(".azul").css("color", "blue")

	//selector clase
	var miClase = $(".zebra").css("padding","5px");
	miClase.eq(3).css("color", "blue");
	miClase.css("border", "5px dashed");
	
	$('.sin_borde').click(function(){
		var that = $(this);
		if(!that.hasClass('zebra')){
			that.addClass('zebra');
		} else that.removeClass('zebra');
	});

	// selectores de etiqueta  cursor-> pointer aparece una mano sobre el area
	
	var parrafos = $('p').css("cursor","pointer");
	parrafos.click(function(){
		var that= $(this);
		if(!that.hasClass('grande')){
			that.addClass('grande');
		} else that.removeClass('grande');
	});
	
	// selectores de atributo
	$('[title="google"]').css('background','green');
	$('[title="facebook"]').css('background','blue')
							.css('color','black');
	$('[title="empresa"]').css('background','#ccc');

	//otros
	//$('p,a').addClass('margenSuperior');
	var busqueda=$('#caja').find('.resaltado');
	console.log(busqueda);
});