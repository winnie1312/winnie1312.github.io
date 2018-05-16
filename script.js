$(document).ready(function(){
  $(window).on("scroll", function() { 
    if($(window).scrollTop() > 900) {
      $(".fixed").addClass("active");
    } else {
      $(".fixed").removeClass("active");
    }
  });



  // $(window).on("scroll", function () {
  //   $(".project-item").addClass("animated slideInUp");
  // })
  
  // hover project items
  $('.item-1, .item-2, .item-3, .item-4, .item-5, .item-6').hover(function() {
    $(this).addClass('background-hide');
    $(this).children().addClass('hovered');


    // $(this).children().removeClass("animated fadeInUp");
    $(this).children().children('div').addClass("animated fadeInDown");
    $(this).children().children('a').addClass("animated fadeInUp");


    }, function() {
    $(this).removeClass('background-hide');
    $(this).children().removeClass('hovered');


    $(this).children().children('div').removeClass("animated fadeInDown");
    $(this).children().children('div').addClass("animated fadeInUp");
    
    $(this).children().children('a').removeClass("animated fadeInUp");
    $(this).children().children('a').addClass("animated fadeInDown");

  });


  // $(".item-1, .item-2-hide, .item-3-hide, .item-4-hide, .item-5-hide, .item-6-hide").hover(function () {
  //   $(this).children().removeClass("animated fadeInUp");
  //   $(this).children().addClass("animated fadeInDown");
  // }, function() {
  //   $(this).children().removeClass("animated fadeInDown");
  //   $(this).children().addClass("animated fadeInUp");
  // });

  // mailto
  $("#email-me").on("click", function() {
    // window.open('mailto:nhuphan0404@gmail.com');
    window.location.href = 'mailto:nhuphan0404@gmail.com';
  })
  
  // animation

  // $(".fa").hover(function(){
  //   $(this).addClass("animated bounce");
  // })

  $(window).on("scroll", function () {
    $(".slide-left-h4, .slide-icons").addClass("animated slideInLeft");
    $(".quote, .slide-right-h4").addClass("animated slideInRight");
    $(".contact-animated").addClass("animated bounceIn");
  });

  $(window).on("scroll", function () {
    $(".column-left").addClass("animated slideInLeft");
    $(".column-right").addClass("animated slideInRight");
  });
 
  

  


});
  
  
  
  
  