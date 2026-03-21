const taco = () => {
  let keyIndex = 0;
  const phrase = ["t", "a", "c", "o"];
  let tacoed = false;

  window.addEventListener("keyup", (e: KeyboardEvent) => {
    if (tacoed) {
      return;
    }

    const key = e.key;
    if (phrase[keyIndex] === key) {
      keyIndex++;
      if (keyIndex === phrase.length) {
        document.body.classList.add("taco");
        tacoed = true;
      }
    } else {
      keyIndex = 0;
    }
  });
};

export default taco;
