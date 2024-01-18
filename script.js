const numericButtons = document.getElementsByClassName("numeric-button");
const backspace = document.querySelector(".backspace");
const percentage = document.querySelector(".percentage");
const dotButton = document.querySelector(".dot-button");
const result = document.querySelector("#displayScreen");
const operatorButtons = document.querySelectorAll(".operators");
let zero = numericButtons[9];
let eight = numericButtons[1];
let nine = numericButtons[2];

// Functions:
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
    return num1 / num2;
  }
  if (operator === "%") {
    return num1 % num2;
  }
}
function additionFunction() {
  operator = "+";
  if (num1 && num2 && operator) {
    num1 = calculate();
    num2 = undefined;
  } else {
    num1 = parseFloat(result.textContent);
  }
  result.textContent = "";
  selectedOperator = undefined;
};
const subtractFunction = () => {
  selectedOperator = "-";
};
const multiplyFunction = () => {
  selectedOperator = "X";
};
const divideFunction = () => {
  selectedOperator = "/";
};
const moduloFunction = () => {
  selectedOperator = "%";
};
const clearFunction = () => {
  result.textContent = "0";
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
};
const backspaceFunction = () => {
  let currentResult = result.textContent.toString();
  result.textContent = currentResult.slice(0, -1);
};
function handleButtonClick(event) {
  const selectedNumber = event.target.textContent;
  if (typeof num1 === "undefined") {
    num1 = parseFloat(selectedNumber.trim());
  } else {
    num2 = parseFloat(selectedNumber.trim());
  }
  result.textContent += selectedNumber.trim();
}
function handleOperatorClick(event) {
  if (event.target.classList.contains("operators")) {
    selectedOperator = event.target.textContent;
  }
}

// Create mathematical operators variables
let addition = document.querySelector(".addition");
let multiplication = document.querySelector(".multiplication");
let division = document.querySelector(".dividing");
let equalButton = document.querySelector(".equal-button");
let subtraction = document.querySelector(".subtraction");
let clear = document.querySelector(".clear");

multiplication.addEventListener("click", multiplyFunction);
subtraction.addEventListener("click", subtractFunction);
division.addEventListener("click", divideFunction);
addition.addEventListener("click", additionFunction);
backspace.addEventListener("click", backspaceFunction);
clear.addEventListener("click", clearFunction);
one.addEventListener("click", handleButtonClick);
seven.addEventListener("click", handleButtonClick);
eight.addEventListener("click", handleButtonClick);
nine.addEventListener("click", handleButtonClick);
zero.addEventListener("click", handleButtonClick);
operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", handleOperatorClick);
});