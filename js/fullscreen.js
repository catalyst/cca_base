/**
 * @file
 * Display images in fullscreen
 *
 */
(function(Drupal) {
  "use strict";

  var enableFullscreen = function(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } else if (element.mozRequestFullscreen) {
      element.mozRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }
  };

  var disableFullscreen = function() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  var isFullscreen = function() {
    return (
      !!document.fullscreenElement ||
      !!document.webkitIsFullScreen ||
      !!document.mozFullScreen ||
      !!document.msFullscreenElement
    );
  };

  Drupal.behaviors.fullscreen = {
    attach: function(context, settings) {
      var element = document.querySelector(".node--view-mode-full .field--name-field-media-image img");
      element &&
        element.addEventListener("click", function() {
          if (isFullscreen()) {
            disableFullscreen();
          } else {
            enableFullscreen(element);
          }
        });
    }
  };
})(Drupal);
