var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play();
        $(this).find(".overlay-poster").hide(); 
}
function hideVideo(e) {
    $('video', this).get(0).pause();
        $(this).find(".overlay-poster").show(); 
}