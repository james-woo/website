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
    
    function setParentTransition(id, prop, delay, style, callback) {
      $(id).css({'-webkit-transition' : prop + ' ' + delay + ' ' + style});
      $(id).css({'-moz-transition' : prop + ' ' + delay + ' ' + style});
      $(id).css({'-o-transition' : prop + ' ' + delay + ' ' + style});
      $(id).css({'transition' : prop + ' ' + delay + ' ' + style});
      callback();
    }
    
    // Put your offset checking in a function
    function checkOffset() {
        if ($(".navbar-default").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        }     
        else {
            setTimeout(function() {
                setParentTransition('.top-nav-collapse', 'top', '0.8s', 'ease', function() {
                    $('.navbar-fixed-top').removeClass('top-nav-collapse');
                });
            });
        }
    }

    // Run it when the page loads
    checkOffset();


    // Run function when scrolling
    $(window).scroll(function() {
        checkOffset();
    });
});