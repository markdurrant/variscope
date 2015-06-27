function populateImages () {
  $.getJSON( "data/itemList.json", function( json ) {
    for (var i = 0; i < json.length; i++) {
      if (i === json.length -1) {
        $('.item-list').append('<li class="item active" style="background-image: url(../img/wiki/' + json[i].url + ');"></li>');
      } else {
        $('.item-list').append('<li class="item" style="background-image: url(../img/wiki/' + json[i].url + ');"></li>');
      }
    };
  });
}

function nextItem () {
  $('.item.active').removeClass('active').prev().addClass('active');
}

function scrollChecker () {
  $(window).scroll(function() {
    if ($(window).scrollTop() % 50 === 0) {
      nextItem();
    };
  });
}

populateImages();
scrollChecker();