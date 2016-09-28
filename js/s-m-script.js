$(document).ready(function() {
  var navPos, winPos;
  
  function refreshVar() {
   navPos = $('nav').offset().top; 
  }
  
  refreshVar();
  $(window).resize(refreshVar);
  
  $(window).scroll(function() {
    winPos = $(window).scrollTop();
    
    if (winPos >= navPos) {
      $('nav').addClass('fixed shadow');
    } else {
      $('nav').removeClass('fixed shadow');
    }
  });
});