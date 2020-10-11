'use strict'
$(document).ready(function() {
    // mover elementos por la página
    $('.elemento').draggable()
        // resizable
    $('.elemento').resizable()
        // selectable - sortable no funcionan conjuntamente
        //$(".listaSeleccionable").selectable()
    $(".listaSeleccionable").sortable()
        //drop
    $("#elementoMovido").draggable()
    $("#area").droppable({
            drop: function() {
                console.log("has soltado en area")
            }
        })
        //efectos
    $("#mostrar").click(function() {
            //$(".cajaEfectos").toggle('fade') //desaparece
            //$(".cajaEfectos").toggle('explode') // explota en varias cachos
            //$(".cajaEfectos").toggle('blink') // 'slide'  
            //$(".cajaEfectos").toggle('drop') // 'puff' 'scale' 'shake'
            //podemos pasar opciones o json
            $(".cajaEfectos").toggle('shake', 'slow')
        })
        // tooltip
    $("document").tooltip()
    $("#lanzar").click(function() {
            //dialog
            $('#popup').dialog()
        })
        // añadir calendario
    $('#calendario').datepicker()
        // sistema de carpetas
    $("#folder").tabs()
})