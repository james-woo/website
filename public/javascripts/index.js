$(document).ready(function (){
    $("#home-link").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 800);
    });
    $("#aboutme-link").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#aboutme").offset().top - 200
        }, 800);
    });
    $("#resume-link").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#resume").offset().top - 200
        }, 800);
    });
    $("#projects-link").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#projects").offset().top - 200
        }, 800);
    });
    $("#contact-link").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 200
        }, 800);
    });
});