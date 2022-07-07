import './main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });

// data-scroll-direction="horizontal" data-scroll data-scroll-speed="-8"

// data-scroll-direction="horizontal" data-scroll data-scroll-speed="10"

$(document).ready(function () {
  var $horizontal = $('.horizontal');
  var startPosition = $horizontal.position().left;
  var speed = 20;
  $(window).scroll(function () {
      var st = $(this).scrollTop();
      var newPos = (st * (speed/100)) + startPosition;
      $horizontal.css({
          'left': newPos
      });
  });
});
$(document).ready(function () {
  var $horizontal1 = $('.horizontal1');
  var startPosition = $horizontal1.position().left;
  var speed = 20;
  $(window).scroll(function () {
      var st = $(this).scrollTop();
      var newPos = (st * (speed/100)) + startPosition;
      $horizontal1.css({
          'right': newPos
      });
  });
});

$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	