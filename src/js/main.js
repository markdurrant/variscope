// function populateImages () {
//   $.getJSON( "data/itemList.json", function( json ) {
//     for (var i = 0; i < json.length; i++) {
//       if (i === json.length -1) {
//         $('.item-list').append('<li class="item active" style="background-image: url(../img/wiki/' + json[i].url + ');"></li>');
//       } else {
//         $('.item-list').append('<li class="item" style="background-image: url(../img/wiki/' + json[i].url + ');"></li>');
//       }
//     }
//   });
// }

// function nextItem () {
//   $('.item.active').removeClass('active').prev().addClass('active');
// }

// function scrollChecker () {
//   $(window).scroll(function() {
//     if ($(window).scrollTop() % 50 === 0) {
//       nextItem();
//     }
//   });
// }

// populateImages();
// scrollChecker();

//===============================================================================
// TEST
//===============================================================================
function nextItem () {
  var currentItem = $('.test-item.current'),
      previousItem = currentItem.prev();

  currentItem.toggleClass('current prev');
  currentItem.one('animationend', function(e) {
    $(this).removeClass('current prev');
  });

  previousItem.addClass('next');
  previousItem.one('animationend', function(e) {
    $(this).toggleClass('next current');
  });
}

function prevItem () {
  var currentItem = $('.test-item.current'),
      nextItem = currentItem.next();

  currentItem.toggleClass('current next2');
  currentItem.one('animationend', function(e) {
    $(this).removeClass('current next2');
  });

  nextItem.addClass('prev2');
  nextItem.one('animationend', function(e) {
    $(this).toggleClass('prev2 current');
  })
}

$(window).keypress(function(e) {
  var ev = e || window.event;

  if(ev.keyCode === 119) {
    nextItem();
  } else if (ev.keyCode === 115) {
    prevItem();
  }
});



// $(function() {
//    $(window).keypress(function(e) {
//        var ev = e || window.event;
//        var key = ev.keyCode || ev.which;
//        //do stuff with "key" here...
//        var new_div = $('<div/>');
//        new_div.hide();
//        new_div.css('color', 'darkgreen');
//        new_div.html('key code ' + key + ' was pressed!');
//        $('body').append(new_div);
//        new_div.fadeIn();
//    });
// });


