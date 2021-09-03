import taco from "./taco";

const foobar = () => {
  addListeners();
  flickCard();
  taco();
};

const addListeners = () => {
  let entered = false;
  let tapped = false;
  const flipElement = document.getElementsByClassName("flip")[0];
  flipElement.addEventListener(
    "mouseenter",
    () => {
      if (!entered) {
        entered = true;
        tapped = true;
        document.getElementsByClassName("card")[0].classList.add("flipped");
      }
    },
    true
  );
  flipElement.addEventListener(
    "mouseout",
    () => {
      if (entered) {
        entered = false;
        document.getElementsByClassName("card")[0].classList.remove("flipped");
      }
    },
    true
  );
  document.body.addEventListener(
    "mouseup",
    () => {
      if (!tapped) {
        document.getElementsByClassName("card")[0].classList.toggle("flipped");
      }
    },
    true
  );
  window.setInterval(() => {
    tapped = false;
  }, 500);
};

const flickCard = () => {
  window.setTimeout(() => {
    document.getElementsByClassName("card")[0].classList.add("flicked");
  }, 200);
  window.setTimeout(() => {
    document.getElementsByClassName("card")[0].classList.remove("flicked");
  }, 425);
};

export default foobar;
