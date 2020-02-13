$(document).ready(function(){

    $("#contact-btn").click(function() {
    $('html, body').animate({
    scrollTop: $("#contact").offset().top
    }, 1000);
    });

    $("#about-btn").click(function() {
        $('html, body').animate({
        scrollTop: $("#about").offset().top
        }, 1000);
    });

    $("#skills-btn").click(function() {
        $('html, body').animate({
        scrollTop: $("#skill").offset().top
        }, 1000);
    });

    $("#projects-btn").click(function() {
        $('html, body').animate({
        scrollTop: $("#proyecto").offset().top
        }, 1000);
    });
});