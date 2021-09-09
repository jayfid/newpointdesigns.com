import taco from "./taco";

const foobar = () => {
  addListeners();
  flickCard();
  taco();
};
const timeoutDuration = 300;

const addListeners = () => {
  let bufferTimeout = false;

  const resetBufferTimeout = () => {
    bufferTimeout = false;
  };
  const flipElement = document.getElementsByClassName("flip")[0];
  const cardElement = document.getElementsByClassName("card")[0];
  flipElement.addEventListener(
    "mouseenter",
    (e) => {
      if (bufferTimeout || e.target !== flipElement) return;
      bufferTimeout = true;
      cardElement.classList.add("flipped");
      window.setTimeout(resetBufferTimeout, timeoutDuration);
    },
    false
  );
  flipElement.addEventListener(
    "mouseleave",
    (e) => {
      if (bufferTimeout && e.target !== flipElement) return;
      bufferTimeout = true;
      cardElement.classList.remove("flipped");
      window.setTimeout(resetBufferTimeout, timeoutDuration);
    },
    false
  );
  document.body.addEventListener(
    "mouseup",
    () => {
      if (bufferTimeout) return;
      bufferTimeout = true;
      cardElement.classList.toggle("flipped");
      window.setTimeout(resetBufferTimeout, timeoutDuration);
    },
    true
  );
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
