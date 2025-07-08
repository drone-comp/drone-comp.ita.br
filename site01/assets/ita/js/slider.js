/*  ::

    :: File         : slider.js
    :: About        : Revolution slider
    :: Version      : 1.4.4

::  */
$(function () {
    $('#page-slider').revolution({
        delay           : 9000,
        startheight     : 500,

        hideThumbs      : 320,

        navigationStyle : "jets",
        navigationType  : "bullet",

        touchenabled    : 'on',
        onHoverStop     : 'on',
        startwidth      : $('body').hasClass('w970') ? 960 : 1170,

        navOffsetHorizontal : 0,
        navOffsetVertical   : 0,

        minFullScreenHeight : '320',

        fullWidth       : 'on'
    }).bind('revolution.slide.onloaded', function (e, data) {
        $(this).parent().addClass('created');
    });
});
