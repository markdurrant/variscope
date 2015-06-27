function populateImages () {
  $.getJSON( "data/itemList.json", function( json ) {
    for (var i = 0; i < json.length; i++) {
      if (i === 4) {
        $('.item-list').append('<li class="item current" style="background-image: url(../img/wiki/' + json[i].url + ');"></li>');
      } else {
        $('.item-list').append('<li class="item" style="background-image: url(../img/wiki/' + json[i].url + ');"></li>');
      }
    }
  });
}

populateImages();

function nextItem () {
  var currentItem = $('.item.current'),
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
  var currentItem = $('.item.current'),
      nextItem = currentItem.next();

  currentItem.toggleClass('current next2');
  currentItem.one('animationend', function(e) {
    $(this).removeClass('current next2');
  });

  nextItem.addClass('prev2');
  nextItem.one('animationend', function(e) {
    $(this).toggleClass('prev2 current');
  });
}

$(window).keypress(function(e) {
  var ev = e || window.event;

  if(ev.keyCode === 119) {
    nextItem();
  } else if (ev.keyCode === 115) {
    prevItem();
  }
});