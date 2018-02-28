var rolexImage = document.querySelector('img');

$('document').ready(function() {
    $(rolexImage).hide().fadeIn(2000);
});

function fadeWatchHover() {
    $(rolexImage).fadeTo('opacity', '0.5');
}
rolexImage.addEventListener('mouseover', fadeWatchHover, false);
function fadeWatchBack() {
    $(rolexImage).fadeTo('opacity', '1.0');
}
rolexImage.addEventListener('mouseout', fadeWatchBack, false);