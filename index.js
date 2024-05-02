console.log("hello world");

let count = 0;

////////////////////////////////////////////////
//   Functions
////////////////////////////////////////////////
const increase = () => {
  count++;
  element.innerText = count;
};

const decrease = () => {
  count--;
  element.innerText = count;
};

const reset = () => {
  count = 0;
  element.innerHTML = `<mark>${count}</mark>`;
};

const selectTheme = (theme) => {
  const body = document.querySelector("body");
  const main = document.querySelector("main");
  const buttons = document.querySelectorAll("button");
  for (const btn of buttons) {
    btn.className = theme;
  }
  body.className = main.className = theme;
};

////////////////////////////////////////////////
//   Selectors
////////////////////////////////////////////////
// Counter Buttons
const increaseBtn = document.querySelector("#incBtn");
const decreaseBtn = document.querySelector("#decBtn");
const resetBtn = document.querySelector("#resetBtn");

// Theme Buttons
const themeButtons = document.querySelectorAll("header button");
const facebookBtn = document.querySelector("#facebook");
const devmountainBtn = document.querySelector("#devmountain");
const twitterBtn = document.querySelector("#twitter");
const defaultBtn = document.querySelector("#default");

// Counter
const element = document.querySelector("#counter");

////////////////////////////////////////////////
//   Event Listeners
////////////////////////////////////////////////
// Counter Buttons
increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);

// Theme Buttons
// facebookBtn.addEventListener("click", () => selectTheme("facebook"));
// devmountainBtn.addEventListener("click", () => selectTheme("devmountain"));
// twitterBtn.addEventListener("click", () => selectTheme("twitter"));
// defaultBtn.addEventListener("click", () => selectTheme("default"));

for (const btn of themeButtons) {
  btn.addEventListener("click", () => selectTheme(`${btn.id}`));
}
