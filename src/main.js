import $ from "jquery";
import taco from "./taco";

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
