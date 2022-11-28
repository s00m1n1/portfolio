$(document).ready(function(){
    $('.header .menu .lnb .lnb_open').on('click', function(){
        $('.header .menu .lnb').addClass('activiting');
    });
    $('.header .menu .lnb .lnb_close').on('click', function(){
        $('.header .menu .lnb').removeClass('activiting');
    });
});