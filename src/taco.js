import $ from "jquery";

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

export default taco;
