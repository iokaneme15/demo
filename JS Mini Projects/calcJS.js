//Need separate events for when we click on numbers vs operators

const resultText = document.getElementsByClassName("result-Text")[0]; //returns an array

let storedValue = null;
let operator = null;

function onNumPress(number) {
    if (number === ".") {
        if(resultText.innerHTML.length === 0 || resultText.innerHTML.includes(".")) 
        return;
    }
    resultText.innerHTML += number.toString();
}
function canOperate() {
    return resultText.innerHTML.length >= 1;
}

function operate(number) {
    let result;

    switch(operator) {
        case "+":
            result = storedValue + number;
            break;
        case "-":
            result = storedValue - number;
            break;
        case "*":
            result = storedValue * number;
            break;
        case "/":
            result = storedValue / number;
            break;            
        }
        resultText.innerHTML = result;
        storedValue = null;
        operator = null;
}

function onOpPressed(operation){
    const number = parseFloat(resultText.innerHTML);
    
    if(!canOperate()) return; //makes calc exit if using doesnt put a number but presses an operator.

    if (operation === "=" && storedValue !== null) {
        return operate(number);
    }
        else if (operation === "c") {
            storedValue = null;
            operator = null;
            
        }
        /* My code. I was guessing the result but was a bit off.. only a bit
        else if (operation === "+") {
            resultText.innerHTML = onNumPress() + onNumPress();
        } 
        else if (operation === "-") {
            resultText.innerHTML = onNumPress() - onNumPress();
        }
        else if (operation === "x") {
            resultText.innerHTML = onNumPress() * onNumPress();
        }
        else if (operation === "/") {
            resultText.innerHTML = onNumPress() / onNumPress();
        }*/
        else {
            operator = operation;
            storedValue = number;
        }
        resultText.innerHTML = "";

}