// Generated by CoffeeScript 1.6.1
(function() {
  var goToGallery, preload, preloadGalleryImages, prepareEnterSite, resizeIndexImage;

  resizeIndexImage = function() {
    var $indexImage, image_height, image_width, leftOffset, topOffset, window_height, window_width;
    window_height = $(window).height();
    window_width = $(window).width();
    $indexImage = $(".indexImage");
    image_height = $indexImage.height();
    image_width = $indexImage.width();
    if ((window_height / window_width) > (image_height / image_width)) {
      $indexImage.height(window_height);
      $indexImage.width(window_height * image_width / image_height);
      leftOffset = ($indexImage.width() - $(window).width()) / 2;
      if (leftOffset > 0) {
        $indexImage.offset({
          left: -leftOffset
        });
      } else {
        $indexImage.offset({
          left: 0
        });
      }
      return $indexImage.offset({
        top: 0
      });
    } else {
      $indexImage.width(window_width);
      $indexImage.height(window_width * image_height / image_width);
      topOffset = ($indexImage.height() - $(window).height()) / 2;
      if (topOffset > 0) {
        $indexImage.offset({
          top: -topOffset
        });
      } else {
        $indexImage.offset({
          top: 0
        });
      }
      return $indexImage.offset({
        left: 0
      });
    }
  };

  $(document).ready(function() {
    var $enterSite, $indexImage;
    $indexImage = $(".indexImage");
    $enterSite = $("#enterSite");
    $indexImage.hide();
    $enterSite.hide();
    $(window).bind('resize', function() {
      return resizeIndexImage();
    });
    $indexImage.ready(function() {
      resizeIndexImage();
      return $indexImage.fadeIn(3000, prepareEnterSite);
    });
    return preloadGalleryImages();
  });

  preloadGalleryImages = function() {
    var gallery, i, _i;
    gallery = [];
    for (i = _i = 1; _i <= 30; i = ++_i) {
      gallery.push("images/portfolio/lightpainting/" + i + ".jpg");
      gallery.push("images/portfolio/lightpainting/icons/" + i + ".jpg");
    }
    return preload(gallery);
  };

  preload = function(array) {
    return $(array).each(function() {
      return $('<img/>')[0].src = this;
    });
  };

  prepareEnterSite = function() {
    var $enterSite;
    $enterSite = $("#enterSite");
    return $enterSite.delay(10).fadeIn(3000, function() {
      return $enterSite.addClass("fade2").click(function() {
        $enterSite.removeClass("fade2").fadeOut(800);
        $(".indexImage").fadeOut(2000);
        return window.setTimeout(goToGallery, 2000);
      });
    });
  };

  goToGallery = function() {
    return window.location.href = "gallery.html";
  };

  /*
  
  operatingSystem = () ->
  
  	if navigator.appVersion.indexOf("Mac") isnt -1
  		return "Enter fullscreen for a better view (⌘ + F11)"
  
  	if navigator.appVersion.indexOf("Win") isnt -1 
  		return "Enter fullscreen for a better view (press F11)"
  
  	else return undefined
  */


}).call(this);
