
// achives sidebar
$(document).ready(function(){
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 800) {
      $(".sidebar").addClass("active");
      $(".icon-side").addClass("active");
    } 
    else {
      $(".sidebar").removeClass("active");
      $(".icon-side").removeClass("active");
    }
  });
});
  
  
  
  