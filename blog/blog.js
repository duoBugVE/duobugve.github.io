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
