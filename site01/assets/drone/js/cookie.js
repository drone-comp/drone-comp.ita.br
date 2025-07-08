if (localStorage.getItem('cookie-banner') != 'true') {
    $('#cookie-banner').delay(2000).fadeIn();
    localStorage.setItem('cookie-banner', 'false');
}
$('.cookie-accept').click(function() {
    $('#cookie-banner').fadeOut();
    localStorage.setItem('cookie-banner', 'true');
});