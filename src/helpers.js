import $ from 'jquery';

// export function stickyNav(nav, offset=0) {
//   var nav = $(nav);
//   var navTop = nav.offset().top + offset;
//   var scrollTop;
//   var $window = $(window);
//
//   $window.on('scroll', function(e) {
//     console.log('scrollTop', scrollTop);
//     console.log('navTop', navTop)
//     scrollTop = $window.scrollTop();
//     if (scrollTop >= navTop) {
//       nav.addClass('sticky');
//     } else if (scrollTop < navTop) {
//       nav.removeClass('sticky')
//     }
//   });
// }

export function dynamicSortHigh(property, sortType) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

export function dynamicSortLow(property, sortType) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

export function onSale(item) {
  if (item.salePrice) {
    console.log("sale item", item.salePrice)
    return item
  }
}

// export function categoryMatch(item) {
//   if (item.fairThreadsCategory)
// }
// export function objectsReducerToArray(items, key) {
//   var reducedObjectsArray = [];
//   items.forEach(function(item) {
//     console.log('key', key)
//     if(reducedObjectsArray.indexOf(item.key) < 0 && item.key != undefined) return reducedObjectsArray.push(item.key)
//   })
//   console.log('in func', reducedObjectsArray)
//   return reducedObjectsArray;
// }
