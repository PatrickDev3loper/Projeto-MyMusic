$(".menu-select-open").click(function () {
  $(".menu-select-open").hide();
  $(".menu-select-close").show();
  $(".menu-mobiel").show();
})

$(".menu-select-close").click(function () {
  $(".menu-select-open").show();
  $(".menu-select-close").hide();
  $(".menu-mobiel").hide();
})

$(".player-close").click(function () {
  $(".player").hide();
  $(".player-open").show();
})

$(".player-open").click(function () {
  $(".player").show();
  $(".player-close").show();
})

$( window ).resize(function() {
       if($(window).width()>900){
          $('.menu-select-close').hide();
          $(".menu-select-open").hide();
          $(".menu-mobiel").hide();
       }else{
         $(".menu-select-open").show();
       }
 });
