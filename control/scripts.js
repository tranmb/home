//for the cows
$(document).ready(function(){
    
    $(".cow-button").click(function(){
      $(".original-cow").clone().appendTo(".screen").css({
        "left": Math.random() * 650+500,
        "top": Math.random() * 340+305
      });
    });
  
});

//for the sheep
$(document).ready(function(){
    
    $(".sheep-button").click(function(){
      $(".original-sheep").clone().appendTo(".screen").css({
        "left": Math.random() * 650+500,
        "top": Math.random() * 340+305
      });
    });
  
});

//emu :3
$(".emu-button").click(
    function(){
        $(".emu").css("opacity","1");
        $(".emu-button").hide();
        $(".emu-snark").css("display","flex");
    }
);

//dark mode
$(".dark-btn").click(
  function(){
    //welcome
    $(".welcome").toggleClass("dark");
    $(".sun").toggleClass("dark");

    //main elements
    $(".container").toggleClass("dark");
    $(".grass").toggleClass("dark");
    $(".column-1").toggleClass("dark");
    $(".to-destination").toggleClass("dark");
    $(".dark-btn").toggleClass("dark");
    $(".reset").toggleClass("dark");
    $(".header").toggleClass("dark");
    $(".button-menu").toggleClass("dark");
    $(".screen").toggleClass("dark");
    //hover
    $(".reset:hover").toggleClass("dark");
    $(".to-destination:hover").toggleClass("dark");
    //paster specific
    $(".cow-button").toggleClass("dark");
    $(".cow-button:hover").toggleClass("dark");
    $(".sheep-button").toggleClass("dark");
    $(".sheep-button:hover").toggleClass("dark");
    $(".emu-button").toggleClass("dark");
    $(".emu-button:hover").toggleClass("dark");
    $(".emu-snark").toggleClass("dark");
    //corn specific
    $(".plant-button").toggleClass("dark");
    $(".plant-button:hover").toggleClass("dark");
    $(".grow-button").toggleClass("dark");
    $(".grow-button:hover").toggleClass("dark");
    $(".harvest-button").toggleClass("dark");
    $(".harvest-button:hover").toggleClass("dark");

  }
);

//dark mode
// $(".dark-btn").click(
//     function(){
//     $(".container").toggleClass("dark");
//     $(".grass").toggleClass("dark");
//     $(".column-1").toggleClass("dark");    
//     $(".to-destination").toggleClass("dark");
//     $(".dark-btn").toggleClass("dark");


//   });





//draggable just in case
$( function() {
    $( ".draggable" ).draggable();
  } );


// This is for the corn

$(".plant-button").click(
  function(){
    $(".seed").css("display","block");
    $(".stalk").css("display","none");
    $(".grown").css("display","none")
  }
);

$(".grow-button").click(
  function(){
    $(".stalk").css("display", "block");
    $(".seed").css("display","none");
    $(".grown").css("display","none")
  }
);

$(".harvest-button").click(
  function(){
    $(".grown").css("display","block");
    $(".stalk").css("display","none");
    $(".seed").css("display","none");

  }
);

// WORKS WITH ABSOLUTE^^^^^

// $(".reveal-btn").click(
//     function(){
//         $(".chair").css("opacity", "1");
//         $(".reveal-btn").hide();
//     }
// );

// add a god damn cow
// function duplicate() { //change  
//     let cowClone = $('.original-cow').clone();
  
//     $('.screen').append(cowClone);
//     cowClone.css({
//       "left": Math.random() * window.innerWidth,
//       "top": Math.random() * window.innerHeight
//     })
//     $('#removeDots').css('display', 'block');
//   }

// $(document).ready(function(){
//     $(".cow-button").click(function(){
//         let cowClone = $(".original-cow").clone();

//         $(".screen").append(cowClone);
//         cowClone.css({
//             'left':Math.random() * 1,
//             "top": Math.random() * 1
//         });
//     }
//     );
// });
