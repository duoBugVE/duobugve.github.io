//Scroll smooth
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
//Boton de volver al top
$('#myButton').hide();
var isVisible = false;
$(window).scroll(function(){
     var shouldBeVisible = $(window).scrollTop()>350;
     if (shouldBeVisible && !isVisible) {
          isVisible = true;
          $('#myButton').show(800);
       $("#sub, #down, h1").addClass("colorBlack");
     } else if (isVisible && !shouldBeVisible) {
          isVisible = false;
          $('#myButton').hide(800);
          $("#sub, #down, h1").removeClass("colorBlack");
    }
});

//Boton de hamburguesa a X
$(".navbar-toggle").click(function(){
  $(this).toggleClass("open");
});


// Botones de compartir
var url = window.location.href;
$("#tweet").on("click", function(){
  window.open("https://twitter.com/intent/tweet?text=" + "Me ha gustado un artículo " + url);
});
$("#fb").on("click", function(){
  window.open("https://www.facebook.com/sharer/sharer.php?u=" + url);
});
$("#google").on("click", function(){
  window.open("https://plus.google.com/share?url=" + url);
});
$("#linked").on("click", function(){
  window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + url);
});
