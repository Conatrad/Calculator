numberBtn = document.querySelectorAll(".number");
operatorBtn = document.querySelectorAll(".operator");
enterBtn = document.querySelector(".enter");
clearBtn = document.querySelector(".clear");
display = document.querySelector(".display");

//Display numbers pressed 

numberBtn.forEach(number => number.addEventListener("click", () => {
    let displayNumber = number.innerText;
    display.innerHTML += displayNumber;
}));

clearBtn.addEventListener("click", () => display.innerHTML = "");


add = (a, b) => a + b;

subtract = (a, b) => a - b;

multiply = (a, b) => a * b;

divide = (a, b) => {
    quotent = a / b;
   return Number(quotent.toFixed(3));
}

operate = (a, operator, b) => {

}

