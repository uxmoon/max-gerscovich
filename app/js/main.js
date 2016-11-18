$(document).ready(function() {
  'use strict';

  var item = Math.floor($('.c-av__item').height());
  $('.c-av__item-more a')
   .css({
    'height': (item + 'px'),
    'line-height': (item + 'px')
  });

});
