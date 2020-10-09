'use strict'
$(document).ready(function() {
    // mouseOver y mouseOut
    let caja = $("#caja"); //seleccionamos el elemento
    /* vamos a realizar esto mismo con hover
    caja.mouseover(function() {
        $(this).css("background-color", "red");
    });
    caja.mouseout(function() {
        $(this).css("background-color", "bisque");
    })
    */
    function cambiaColor() {
        $(this).css("background-color", "red")
            .css("cursor", "pointer")
    };

    function restableceColor() {
        $(this).css("background-color", "bisque")
            .css("color", "black")
    };
    // evento hover
    caja.hover(cambiaColor, restableceColor);

    //click y doble click
    caja.click(function() {
        $(this).css("background-color", "blue")
            .css("color", "white")
    });
    //click y doble click
    caja.dblclick(function() {
        $(this).css("background-color", "yellow")
            .css("color", "orange")
    });
    // focus y blur
    let nombre = $("#nombre")
    nombre.focus(function() {
        $(this).css("border", "4px solid green")
    })
    nombre.blur(function() {
        $(this).css("border", "1px solid #ccc")

        $("#datos").text($(this).val()).show()
    })

});