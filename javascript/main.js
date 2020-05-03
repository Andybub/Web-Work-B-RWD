$(document).ready(function(){

    $('a').click(function(e){

        e.preventDefault();

    });

    $('.menu').click(function(e){

        $('nav').slideToggle();

    });

    $('#go-top').click(function(e){

        let target = $(this).attr('href');

        let offset = $(target).offset();

        $('html, body').animate({scrollTop: offset.top});

    });

});