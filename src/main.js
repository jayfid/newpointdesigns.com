import taco from "./taco";

const foobar = () => {
  addListeners();
  flickCard();
  taco();
};

class stateBox {
  isLocked = false;

  lock() {
    this.isLocked = true;
  }

  unlock() {
    this.isLocked = false;
  }
}
const currentState = new stateBox();

const handleEvent = (e) => {
  currentState.lock();
  e.preventDefault();
  e.stopImmediatePropagation();
  window.setTimeout(() => currentState.unlock(), 200);
};

const addListeners = () => {
  const flipElement = document.getElementsByClassName("flip")[0];
  const cardElement = document.getElementsByClassName("card")[0];
  flipElement.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target !== flipElement || currentState.isLocked) return;
      handleEvent(e);
      cardElement.classList.add("flipped");
    },
    true
  );
  flipElement.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target !== flipElement || currentState.isLocked) return;
      handleEvent(e);
      cardElement.classList.remove("flipped");
    },
    true
  );
  document.body.addEventListener(
    "mouseup",
    (e) => {
      if (
        e.target.tagName?.toString().toLowerCase() == "a" ||
        currentState.isLocked
      )
        return;
      handleEvent(e);
      cardElement.classList.toggle("flipped");
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
