$(document).ready(function(){
  $(window).on("scroll", function() { 
    if($(window).scrollTop() > 900) {
      $(".fixed").addClass("active");
    } else {
      $(".fixed").removeClass("active");
    }
  });

  // nav-item clicked
  $(".nav-link").on("click", function () {
    $(".nav-link").removeClass('active');
    $(this).addClass('active');
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

  // mailto
  $("#email-me").on("click", function() {
    // window.open('mailto:nhuphan0404@gmail.com');
    window.location.href = 'mailto:nhuphan0404@gmail.com';
  })
  
  // animation

  // $(window).on("scroll", function () {
  //   $(".slide-left-h4, .slide-icons").addClass("animated slideInLeft");
  //   $(".quote, .slide-right-h4").addClass("animated slideInRight");
  //   $(".contact-animated").addClass("animated bounceIn");
  // });


  // scroll down the site
  $(window).on("scroll", function () {
    // console.log('TEST', $("#portfolio").position().top, $(window).scrollTop());
    if($("#portfolio").position().top < $(window).scrollTop() + 700) {
      console.log('helloo!!!!');
      $(".project-animated").addClass("animated slideInRight");
    }
    
  });


  $(window).on("scroll", function () {
    $(".column-left").addClass("animated slideInLeft");
    $(".column-right").addClass("animated slideInRight");
  });
 


// particles  
/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50, 
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#fff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.1
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

  


});
  
  
  
  
  