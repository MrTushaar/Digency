
// script for hero-slider
var mySwiper = new Swiper ('.swiper-container', {
  autoplay: true,
  speed: 1000,
  direction: 'horizontal',
  loop: true
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});


// script for the go to top btn
// window.onscroll = function() {gototop()};

// function gototop() {
//   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//     document.getElementById("top-btn").style.visibility = "visible";
//     document.getElementById("top-btn").style.opacity = "1";
//   }
//   else {
//     document.getElementById("top-btn").style.visibility = "hidden";
//     document.getElementById("top-btn").style.opacity = "0";
//   }
// };

// function gototop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// };


// script for the navigation and show/hide go-to-top btn
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.backgroundColor = "#f7f8fb";
    document.getElementById("header").style.borderBottom = "2px solid #306cdb";
  }
  else {
    document.getElementById("header").style.backgroundColor = "transparent";
    document.getElementById("header").style.borderBottom = "0";
  }
};


// script for triggering nav on mobiles
$(".nav-trigger").on('click', function() {
  $(".mobile-nav").toggleClass("active");
  $(".mobile-nav-wrap a").addClass("animate");
  $(".on-focus-shade").addClass("active");
});
// closing the mobile nav
$(".mobile-nav-close").on('click', function() {
  $(".mobile-nav").removeClass("active");
  $(".mobile-nav-wrap a").removeClass("animate");
  $(".on-focus-shade").removeClass("active");
});


// script for triggering the search screen
$(".search-trigger").on('click', function() {
  $(".search-screen").addClass("show");
  $(".on-focus-shade").addClass("active");
});

$(".search-screen-close").on('click', function() {
  $(".search-screen").removeClass("show");
  $(".on-focus-shade").removeClass("active");
});

$(".on-focus-shade").on('click', function() {
  $(".search-screen").removeClass("show");
  $(".mobile-nav").removeClass("active");
  $(".mobile-nav-wrap a").removeClass("animate");
  $(".on-focus-shade").removeClass("active");
});


// script for triggering the search screen on mobile nav
$(".search-on-mobile").on('click', function() {
  $(".search-screen").addClass("show");
  $(".mobile-nav").removeClass("active");
  $(".mobile-nav-wrap a").removeClass("animate");
});


// magnific popup
$('.video-play-btn').magnificPopup({
  type: 'video'
});










