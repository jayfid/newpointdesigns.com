import $ from "jquery";

const foobar = (window) => {
  "use strict";
  let entered = false;
  let tapped = false;
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
  window.setTimeout(() => {
    $(".card").addClass("flicked");
  }, 200);
  window.setTimeout(() => {
    $(".card").removeClass("flicked");
  }, 425);
  $(".frame").click(function () {
    if (!tapped) {
      $(".card").toggleClass("flipped");
    }
  });
  window.setInterval(function () {
    tapped = false;
  }, 500);

  taco();
};

export default foobar;

const taco = () => {
  let keyindex = 0;
  $(window).keypress(function (e) {
    let phrase = [116, 97, 99, 111];
    let tacoed = false;
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
};
