'use strict'
$(document).ready(function() {
    let elemento = $('#caja')
    let bMostrar = $('#mostrar')
    let bOcultar = $('#ocultar')
        //elemento.hide()
    bMostrar.click(function() {
        bOcultar.show()
        bMostrar.hide()
            //elemento.fadeIn('normal') //'show' 'fadeIn' 'fadeTo' -> va de un estado a otro  'slideUp' 'slideDown'
        elemento.fadeTo('slow', 1)
    })
    $('#ocultar').click(function() {
            bOcultar.hide()
            bMostrar.show()
                //elemento.hide('fast') //'hide' 'fadeOut'
                //elemento.fadeTo('slow', 0)
            elemento.slideUp('slow', function() {
                console.log("elemento oculto")
            })
        })
        //todo el código anterior se puede sustituri por toggle que hace mostrar/ocultar cada vez que se ejecuta el metodo.
        //'fadeToggle' 'slideToggle'
    $('#boton').click(function() {
        elemento.toggle('fast')
    })
    $('#animar').click(function() {
        elemento.animate({
                marginLeft: '500px',
                fontSize: '30px',
                height: '110px',
                textAlign: 'justify'
            }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '80px'
            }, 'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            }, 'slow')
            .animate({
                borderRadius: '0px',
                marginTop: '0px',
                marginTop: '15px',
                height: '50px',
                fontSize: '20px'
            }, 'slow')

    })
})