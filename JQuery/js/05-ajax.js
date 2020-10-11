'use strict'
// ver web reqres.in
$(document).ready(function($) {
    //load
    //$('#datos').load('https://reqres.in')
    //get
    $.get('https://reqres.in/api/unknown', function(response) {
            console.log(response)
            response.data.forEach((element, index) => {
                $("#datos").append("<p>" + element.name + "</p>")
            })
        })
        //post
    let usuario = {
        email: "eve.holt@reqres.in",
        password: "pistol"
    }
    $.post('https://reqres.in/api/register', usuario, function(response) {
        console.log(response)
    })
    $.ajax({
        url: "https://reqres.in/api/users",
        type: "POST",
        data: {
            name: "paul rudd",
            movies: ["I Love You Man", "Role Models"]
        },
        success: function(response) {
            console.log(response);
        }
    });
    $('#formulario').submit(function(e) {
        e.preventDefault()
        let data = {
            name: $('input[name = "name"]').val(),
            movies: $('input[name = "movies"]').val()
        }
        console.log(data)
        $.post($(this).attr("action"), data, function(response) {
            console.log(response)
        })
        return false
    })
})