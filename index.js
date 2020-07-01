

$(window).on('beforeunload', function() {
   $(window).scrollTop(0);
});

$(document).ready(function() {
$(".title-image").addClass("animate__animated animate__fadeInRight");
  });

$(document).ready(function() {
  $(".column").addClass("animate__animated animate__fadeInLeft");
})

$(document).ready(function() {
  $(document).scroll(function() {
    var positionTop = $(document).scrollTop();
    console.log(positionTop);
    if ((positionTop > 100) && (positionTop < 528)) {
      $(".aboutuscolumn").addClass("animate__animated animate__zoomIn");
    }
  });
});

$(document).ready(function() {
  $(document).scroll(function() {
    var position = $(document).scrollTop();
    if ((position > 950) && (position < 1050)) {
      $(".serviceIcons").addClass("animate__animated animate__fadeInDown");
    }
  });
});


$(".heading1").hover(function() {
  $(".heading1").addClass("animate__animated animate__flip");
});


$(".heading2").hover(function() {
  $(".heading2").addClass("animate__animated animate__flip");
});


$(".heading3").hover(function() {
  $(".heading3").addClass("animate__animated animate__flip");
});

$(".heading4").hover(function() {
  $(".heading4").addClass("animate__animated animate__flip");
});

$(".heading5").hover(function() {
  $(".heading5").addClass("animate__animated animate__flip");
});

$(".heading6").hover(function() {
  $(".heading6").addClass("animate__animated animate__flip");
});

$(".heading7").hover(function() {
  $(".heading7").addClass("animate__animated animate__flip");
});

$(".heading8").hover(function() {
  $(".heading8").addClass("animate__animated animate__flip");
});


$(".download-button").click(function() {
  $(".box1").html('<div class="changer"><h2 class="onclickhtml">GALVALUME ROOFING SHEET</h2><h2 class="onclickhtml">ALUMINIUM ROOFING SHEET</h2><h2 class="onclickhtml">DECKING SHEET</h2><h2 class="onclickhtml">CLADDING SHEET</h2><h2 class="onclickhtml">TILE SHEET</h2><h2 class="onclickhtml">POLYCARBONATE SHEET</h2><h2 class="onclickhtml">CORUGGATED SHEET</h2><h2 class="onclickhtml">PLAIN SHEET</h2><h2 class="onclickhtml">SANDWICH SHEET</h2><a href="" class="closediv"><img src="images/back.png" alt=""></a></div>')
});

$(".whyimage1").hover(function(){
  $(".whyimage1").addClass("animate__animated animate__flipInX");
});
$(".whyimage2").hover(function(){
  $(".whyimage2").addClass("animate__animated animate__flipInX");
});
$(".whyimage3").hover(function(){
  $(".whyimage3").addClass("animate__animated animate__flipInX");
});
$(".whyimage4").hover(function(){
  $(".whyimage4").addClass("animate__animated animate__flipInX");
});
$(".whyimage5").hover(function(){
  $(".whyimage5").addClass("animate__animated animate__flipInX");
});

// const express=require("express");
// const app = express();
//
// app.listen(3000,function(){
//   console.log("Server started");
// });
