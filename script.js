// Create numbers variables & other symbols
let numericButtons = document.querySelectorAll(".numeric-button");
const clearButton = document.querySelector(".clear");
let backspace = document.querySelector(".backspace");
let percentage = document.querySelector(".percentage");
let dotButton = document.querySelector(".dot-button");
let result = document.querySelector("#displayWindow");
let operatorButtons = document.querySelectorAll(".operators");
let num1, num2, operator;

// Save the buttons into an array
let buttons = Array.from(document.querySelectorAll(".button"));

function playMusic(){
  let audio =  new Audio("audio.mp3");
  audio.volume = 0.07;
  audio.play();
  }

clearButton.addEventListener("click", () => {
  displayWindow.value = "";
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
});

// Calculator logic
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonText = e.target.textContent.trim();
    playMusic()
    
    if (buttonText == "."){
      if(!displayWindow.value.includes('.') && displayWindow.value.length) {
      displayWindow.value += buttonText;
      }
    }
    if(button.classList.contains("backspace")){
      let currentResult = displayWindow.value.toString();
      displayWindow.value = currentResult.slice(0, -1);
    }
    else if (!isNaN(parseFloat(buttonText))){
      // For more than one decimal don't do anything. Return
       if (typeof operator === "undefined") {
        displayWindow.value += buttonText;
      } else {
        displayWindow.value += buttonText;
        num2 = parseFloat(displayWindow.value);
      }
    }
     if (button.classList.contains("operators")) {
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
          displayWindow.textContent = resultValue
          num1 = resultValue;
          num2 = undefined;
          operator = undefined;
      }}
    
  })
})

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
    console.log("Hey")
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

const moduloFunction = () => {
  operator = "%";
};