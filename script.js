$(document).ready(function(){
  $(window).on("scroll", function() { 
    if($(window).scrollTop() > 900) {
      $(".fixed").addClass("active");
    } else {
      $(".fixed").removeClass("active");
    }
  });

  // hover project items
  $('.item-1, .item-2, .item-3, .item-4, .item-5, .item-6').hover(function() {
    $(this).addClass('background-hide');
    $(this).children().addClass('hovered');
  }, function() {
    $(this).removeClass('background-hide');
    $(this).children().removeClass('hovered');
  });
});
  
  
  
  
  