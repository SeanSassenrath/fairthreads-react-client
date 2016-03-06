import chunk from 'lodash/chunk';
import $ from 'jquery';

export function makeFourColumns(products) {
  return chunk(products, 4)
}

export function stickyNav(nav, offset=0) {
  var nav = $(nav);
  var navTop = nav.offset().top + offset;
  var scrollTop;
  var $window = $(window);

  $window.on('scroll', function(e) {
    console.log('scrollTop', scrollTop);
    console.log('navTop', navTop)
    scrollTop = $window.scrollTop();
    if (scrollTop >= navTop) {
      nav.addClass('sticky');
    } else if (scrollTop < navTop) {
      nav.removeClass('sticky')
    }
  });
}
