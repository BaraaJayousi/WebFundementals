
let displayElem = document.querySelector("#display");
let currentOpertator = ""
let num1 = 0.00;
let num2 = 0.00;
// let displayValue = 0.00;
let numOneIsSet = false;

function press(number){
    
    if(displayElem.innerText === "0" || numOneIsSet){
        if(number == "."){
            displayElem.innerText= "0."
        }else{
            displayElem.innerText = number;
        }
        numOneIsSet = false;
    }else if((!displayElem.innerText.includes(".")) || number != "."){
        displayElem.innerText += number;
    }
    // displayValue = parseFloat(displayElem.innerText)
}

function clr(){
    displayElem.innerText= "0";
    num1 = 0;
    num2 = 0;
}

function setOP(operator){
    currentOpertator = operator;
    num1 = parseFloat(displayElem.innerText)
    numOneIsSet = true;
}

function calculate(){
    num2 = parseFloat(displayElem.innerText)
    console.log(`number 1 = ${num1}`);
    console.log(`number 2 = ${num2}`);
    switch (currentOpertator) {
        case "+":
            displayElem.innerText = num1 + num2;
            break;

        case "*":
            displayElem.innerText = num1 * num2;
            break;

        case "/":
            displayElem.innerText = num1 / num2;
            break;

        case "-":
            displayElem.innerText = num1 - num2;
            break;
    
        default:
            break;
    }
    num1 = parseFloat(displayElem.innerText)
    numOneIsSet = true;
}