/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    $("a").css("color", "red")
            .click(function ()
            {
                $("#titulo")
                        .css("color", "#0000FF")
                        .text("Curso e Jquery")
                        .hide()
                        .fadeToggle();
            });
});

$(document).ready(function () {
    $("button").click(function () {
        $("#test").hide();
    });
});