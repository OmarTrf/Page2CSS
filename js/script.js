$(function(){
   $('.btn-First').click(function(){
     $('.text .one').show().siblings().hide();
     
   });
   $('.btn-Second').click(function(){
    $('.text .two').show().siblings().hide();
   });
   $(window).scroll(function(){
      var scroll = $(this).scrollTop();
      if (scroll > 300) {
      	$(".Htwo").slideDown();
      }else{
      	$(".Htwo").slideUp();
      }
   });
    /* $(document).ready(function(){
       $(".fancybox").fancybox();
     });*/
     
     $("div.acordion h3").click(function(){
        $(this).next().slideToggle();
        $("div.acordion p").not($(this).next()).slideUp();
     });
     $(".one").css("display","block");
});