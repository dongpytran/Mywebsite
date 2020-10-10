$("video").prop('muted', false);




$(document).ready(function(){
    $("#pause").on('click',function(){
        $(this).hide();
        $("#play").fadeIn();
        //$("#mymusic")[0].pause();
        //$("#bg-video")[0].pause();
        $("video").prop('muted', true);
        
    });
    $("#play").on('click',function(){
        $(this).hide();
        $("#pause").fadeIn();
        //$("#mymusic")[0].play();
        //$("#bg-video")[0].play();

        $("video").prop('muted', false);
    });
});