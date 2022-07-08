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


	