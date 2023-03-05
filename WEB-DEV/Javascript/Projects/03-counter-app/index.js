//https://codehelp-counter-app.netlify.app/
const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");
const counter = document.querySelector("#counter");

const increment = () => {
  let counterVal = parseInt(counter.innerText);
  counterVal++;
  counter.innerText = counterVal;
};

const decrement = () => {
  let counterVal = parseInt(counter.innerText);
  counterVal--;
  counter.innerText = counterVal;
};
