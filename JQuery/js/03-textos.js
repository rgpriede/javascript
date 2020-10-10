'use strict'
$(document).ready(function() {
    reloadLinks()
    $("#add_button").removeAttr('disabled') //borra el attr disabled definido en html
        .click(function() {
            console.log($('#addNew').val())
            let newMenuItem = $('#addNew') //recogemos el valor introducido en pantalla
            $("#menu").append('<li><a href="' + newMenuItem.val() + '"></a></li') //'html' sustituye 'append' añade 'prepend' inicio lista 'before' / 'after'
            newMenuItem.val('')
            reloadLinks()
        })
    console.log($('a').length)

})

function reloadLinks() {
    $("a").each(function(index) {
            let elemento = $(this)
            let enlace = elemento.attr('href') //obtenemos valor del atributo
            elemento.attr('target', '_blank') //añadimos para que al dar al link se abra en pagina nueva
            elemento.text(enlace)

        })
        //para remover algún atributo elemento.removeAttr()
}