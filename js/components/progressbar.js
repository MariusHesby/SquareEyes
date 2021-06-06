const progress = document.querySelector(".progress");
const inputs = document.querySelectorAll("#basics input");
const anyInput = document.querySelectorAll('#basics input[value]:not([value=""])').length;
const button = document.querySelector(".flex button");
const form = document.querySelector("#theForm");
let sum = (100 / 7) * anyInput;
console.log(inputs);

if (anyInput !== 0) {
  progress.style.width = sum + "%";
}

const checkLength = (inputs) => {
  let val = 0;
  inputs.forEach((input) => {
    if (input.value) val++;
  });
  return val;
};

const changeColor = (progressSum) => {
  switch (progressSum) {
    case 20:
      return (progress.style.background = "red");
    case 40:
      return (progress.style.background = "orange");
    case 60:
      return (progress.style.background = "var(--yellow)");
    case 80:
      return (progress.style.background = "var(--yellow)");
    case 100:
      return (progress.style.background = "var(--green)");
  }
};

form.addEventListener("input", (e) => {
  const length = checkLength(inputs);
  const percentageValuePerInput = 100 / inputs.length;
  const progressSum = percentageValuePerInput * length;
  progress.style.width = progressSum + "%";
  changeColor(progressSum);
});
