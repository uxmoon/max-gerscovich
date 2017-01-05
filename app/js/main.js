(function() {
  'use strict';

  var item = Math.floor($('.c-av__item').height());

  $('.c-av__item-more a').css({
    'height': (item + 'px'),
    'line-height': (item + 'px')
  });


  /*
  * Sticky nav - source: http://www.webdesignerdepot.com/2014/05/how-to-create-an-animated-sticky-header-with-css3-and-jquery/
  * get the site title height and use it to dynamically add a new class to the
  * anchor nav
  */
  var siteTitle = $('.c-header h1').outerHeight();
  var navigation = $('#anchor-nav');
  $(window).scroll(function() {
    if ($(this).scrollTop() > siteTitle) {
      $(navigation).addClass('js-sticky');
    } else {
      $(navigation).removeClass('js-sticky');
    }
  });


  // Scroll to - source: http://codepen.io/chriscoyier/pen/dpBMVP
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

})();
