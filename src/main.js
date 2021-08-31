/* credit - modified from http://jsfiddle.net/rsadwick/zwWHY/ */
const foobar = (function ($, window) {
  "use strict";
  var entered = false,
    tapped = false,
    keyindex = 0,
    phrase = [116, 97, 99, 111],
    tacoed = false;
  $(".flip").mouseover(function () {
    if (!entered) {
      entered = true;
      tapped = true;
      $(this).find(".card").addClass("flipped");
    }
  });

  $(".flip").mouseleave(function () {
    if (entered) {
      entered = false;
      $(this).find(".card").removeClass("flipped");
    }
  });

  window.setTimeout(function () {
    $(".card").addClass("flicked");
  }, 200);

  window.setTimeout(function () {
    $(".card").removeClass("flicked");
  }, 500);

  $(".frame").click(function () {
    if (!tapped) {
      $(".card").toggleClass("flipped");
    }
  });

  window.setInterval(function () {
    tapped = false;
  }, 500);

  $(window).keypress(function (e) {
    if (tacoed) {
      return;
    }
    var key = e.which;
    if (phrase[keyindex] === key) {
      keyindex++;
      if (keyindex === phrase.length) {
        $(document.body).addClass("taco");
        tacoed = true;
      }
    } else {
      keyindex = 0;
    }
  });
})(jQuery, window);

export default foobar;
