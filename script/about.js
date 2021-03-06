// Generated by CoffeeScript 1.8.0
(function() {
  var bindClickEvents, bindHoverEvents, buildNavFunctions, exitPage, loadpage, preload, preloadAboutImages;

  $(document).ready(function() {
    return loadpage();
  });

  loadpage = function() {
    var what, who;
    buildNavFunctions();
    bindClickEvents();
    bindHoverEvents();
    $("#headerBar").hide().fadeIn(1000);
    who = $("#who").hide().fadeIn(1000);
    what = $("#what").hide().fadeIn(1000);
    return preloadAboutImages();
  };

  buildNavFunctions = function() {
    $("#Gallery").click(function() {
      return exitPage("gallery.html");
    });
    $("#headerBarLogo").click(function() {
      return exitPage("index.html");
    });
    return $("#Contact").click(function() {
      return exitPage("mailto:zfrenchee@gmail.com");
    });
  };

  bindClickEvents = function() {
    $("#who").click(function() {
      $("#what, #who").fadeOut(400);
      return exitPage('people.html');
    });
    $("#what").click(function() {
      $("#what, #who").fadeOut(400);
      return exitPage('method.html');
    });
    $("#About").click(function() {
      return back();
    });
    return $(".backButton").click(function() {
      return back();
    });
  };

  bindHoverEvents = function() {
    $('#who').children().hover((function() {
      return $('#meet').addClass('aboutHover');
    }), (function() {
      return $('#meet').removeClass('aboutHover');
    }));
    return $('#what').children().hover((function() {
      return $('#how').addClass('aboutHover');
    }), (function() {
      return $('#how').removeClass('aboutHover');
    }));
  };

  exitPage = function(destination) {
    var go;
    go = function() {
      return window.location.href = destination;
    };
    $("#headerBar").fadeOut(400);
    $(".pane").fadeOut(400);
    return window.setTimeout(go, 400);
  };

  preloadAboutImages = function() {
    var gallery;
    gallery = [];
    gallery.push("images/about/t4.jpg");
    gallery.push("images/about/tools0.jpg");
    gallery.push("images/about/Alex5.jpg");
    gallery.push("images/about/Bradford1.jpg");
    gallery.push("images/about/Max.jpg");
    gallery.push("images/about/icons/raw/Anna.jpg");
    gallery.push("images/about/icons/raw/masha.jpg");
    gallery.push("images/about/greg&arun.jpg");
    gallery.push("images/about/t3.jpg");
    gallery.push("images/about/tools6.jpg");
    gallery.push("images/about/tools/sticks.jpg");
    gallery.push("images/about/tools/staves2.jpg");
    gallery.push("images/about/tools/whip.jpg");
    gallery.push("images/about/tools/steel-wool.jpg");
    gallery.push("images/about/tools/floodlight.jpg");
    gallery.push("images/about/tools/orb.jpg");
    gallery.push("images/about/tools/saber.jpg");
    gallery.push("images/about/Alex3.jpg");
    gallery.push("images/portfolio/lightpainting/2.jpg");
    gallery.push("images/portfolio/lightpainting/21.jpg");
    gallery.push("images/portfolio/lightpainting/23.jpg");
    gallery.push("images/portfolio/lightpainting/12.jpg");
    gallery.push("images/about/Alex2.jpg");
    gallery.push("images/about/us.jpg");
    gallery.push("images/about/photo-e.jpg");
    gallery.push("images/about/lapp.jpg");
    return preload(gallery);
  };

  preload = function(array) {
    var image, img, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = array.length; _i < _len; _i++) {
      image = array[_i];
      img = new Image();
      _results.push(img.src = image);
    }
    return _results;
  };

}).call(this);
