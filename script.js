// seecting all keys at once with the class key
const keys = document.querySelectorAll(".key");
const regulars = document.querySelectorAll(".key.white");
//  to target the regulars and the sharp keys. As we  know, our regulars have a white class and the sharps have a black class. Let's target them
const sharps = document.querySelectorAll(".key.black");
const whites = ["a", "s", "d", "f", "g", "h", "j"];
const blacks = ["w", "e", "r", "t", "y"];

keys.forEach((key) => {
  key.addEventListener("click", () => playNote(key));
});

document.addEventListener("keydown", (e) => {
  //  if we hold a key, the audio will sound ridiculous. Because, when a key is held, the keydown event gets triggered after every few seconds. To stop this behaviour, we’ll check if the key is held down. If it is, then we’ll simply return the function. Returning the function will not execute any code. And this is done by if (e.repeat) return line.
  if (e.repeat) return;
  const key = e.key;
  //    To get the index, we’ll use the indexOf method.
  const whiteKeyIndex = whites.indexOf(key);
  const blackKeyIndex = blacks.indexOf(key);

  if (whiteKeyIndex > -1) playNote(regulars[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(sharps[blackKeyIndex]);
});

let playNote = (key) => {
  const noteSound = document.getElementById(key.dataset.note);
  noteSound.currentTime = 0;
  noteSound.play();
  key.classList.add("active");
  noteSound.addEventListener("ended", () => {
    key.classList.remove("active");
  });
};
