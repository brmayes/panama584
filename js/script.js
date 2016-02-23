//Panel
  jQuery(function($) {
    $('body').panelSnap();
  });

  jQuery(function($) {
    var options = {
      $menu: false,
      menuSelector: 'a',
      panelSelector: '> section',
      namespace: '.panelSnap',
      onSnapStart: function() {},
      onSnapFinish: function() {},
      onActivate: function() {},
      directionThreshold: 50,
      slideSpeed: 200,
      easing: 'linear',
      offset: 0,
      navigation: {
        keys: {
          nextKey: false,
          prevKey: false,
        },
        buttons: {
          $nextButton: false,
          $prevButton: false,
        },
        wrapAround: false
      }
    };

    $('.panel_container').panelSnap(options);
  });

//Video
  $('.video').parent().click(function() {
    if ($(this).children(".video").get(0).paused) {
      $(this).children(".video").get(0).play();
      $(this).children(".playpause").fadeOut();
    } else {
      $(this).children(".video").get(0).pause();
      $(this).children(".playpause").fadeIn();
    }
  });

//Vauge
  var vague = $(".container").Vague({
    intensity: 30
  });
  vague.blur();
