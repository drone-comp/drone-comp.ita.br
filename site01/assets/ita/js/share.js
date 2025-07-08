var x = encodeURI(window.location.href);
var twittersharing = document.getElementById("twitter-sharing"); // store the element
var facebooksharing = document.getElementById("facebook-sharing"); // store the element
var twitterHref = twittersharing.getAttribute('href'); // get its current href value
var facebookHref = facebooksharing.getAttribute('href'); // get its current href value
twittersharing.setAttribute('href', twitterHref + x);
facebooksharing.setAttribute('href', facebookHref + x);