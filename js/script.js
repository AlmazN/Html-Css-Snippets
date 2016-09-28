$(document).ready(function () {
  $('.jq-accordeon-wrapper>p').not(':first').hide();
  
  $('.jq-accordeon-wrapper>h2').click(function () {
    var findP = $(this).next('p');
    var findWrapper = $(this).closest('.jq-accordeon-wrapper');
    
    if(findP.is(':visible')) {
      findP.slideUp();
    } else {
      findWrapper.find('>p').slideUp();
      findP.slideDown();
    }
  });
});