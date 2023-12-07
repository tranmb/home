$(document).ready(function(){

    $( ".button" ).on( "click", function() {
        $('.pop-up').css({opacity: 1, display: 'flex',})
       
      });
}
);

$(".x").on("click", function() {
    $(".pop-up").css({opacity:0})
});


// $( ".button" ).on( "click", function() {
//     $( ".pop-up" ).show();
//   });

