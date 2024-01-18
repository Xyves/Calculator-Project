// Create numbers variables & other symbols
let numericButtons = document.getElementsByClassName("numeric-button");
const clearButton = document.querySelector(".clear");
let backspace = document.querySelector(".backspace");
let percentage = document.querySelector(".percentage");
let dotButton = document.querySelector(".dot-button");
let result = document.querySelector("#displayWindow");
let operatorButtons = document.querySelectorAll(".operators");
let num1, num2, operator;

// Save the buttons into an array
let buttons = Array.from(document.getElementsByClassName("button"));

clearButton.addEventListener("click", () => {
  displayWindow.value = "";
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
});
// Print the button pressed
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.textContent.trim();

    if (!isNaN(parseFloat(buttonText)) || buttonText === ".") {
      if (typeof operator === "undefined") {
        displayWindow.value += buttonText;
      } else {
        displayWindow.value += buttonText;
        num2 = parseFloat(displayWindow.value);
      }
    } else if (button.classList.contains("operators")) {
      operator = buttonText;
      num1 = parseFloat(displayWindow.value);
      displayWindow.value = "";
    } else if (button.classList.contains("equal-button")) {
      if (
        typeof num1 !== "undefined" &&
        typeof num2 !== "undefined" &&
        typeof operator !== "undefined"
      ) {
        const resultValue = calculate();
        displayWindow.value = resultValue;
        num1 = resultValue;
        num2 = undefined;
        operator = undefined;
      }
    }
  });
});

function calculate() {
  if (operator === "+") {
    return num1 + num2;
  }
  if (operator === "-") {
    return num1 - num2;
  }
  if (operator === "X") {
    return num1 * num2;
  }
  if (operator === "/") {
    if (num2 === 0) {
      return "Undefined";
    } else {
      return num1 / num2;
    }
  }
  if (operator === "%") {
    return num1 % num2;
  }
  return NaN;
}
const subtractFunction = () => {
  operator = "-";
};
const multiplyFunction = () => {
  operator = "X";
};
const divideFunction = () => {
  operator = "/";
};

const divideButton = document.querySelector(".dividing");
divideButton.addEventListener("click", divideFunction);
const moduloFunction = () => {
  operator = "%";
};

const backspaceFunction = () => {
  let currentResult = result.textContent.toString();
  result.textContent = currentResult.slice(0, -1);
};