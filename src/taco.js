const taco = () => {
  let keyIndex = 0;
  const phrase = ["t", "a", "c", "o"];
  window.addEventListener("keyup", (e) => {
    let tacoed = false;
    if (tacoed) {
      return;
    }
    var key = e.key;
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
