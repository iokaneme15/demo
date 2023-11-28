/*
//Random Number

const num = Math.random(); //Random num btwn 0 and 1
console.log(num);

//With Rounding
const num2 = 10 + Math.round(Math.random() * 10);
console.log(num2);


function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const num3 = randomNum(20, 80);
console.log(num3);
*/
//Random Number Generator Program
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
} //generate a random number
let num = randomNum(1, 100);
let numGuesses = 0; //set number of guesses to 0

function reset() { //generates a new random number, set guesses to 0, update <p> tag in our HTML 
    num = randomNum(1, 100);
    numGuesses = 0;
    document.getElementById("num-guesses").innerHTML = 0;
}
function makeGuess(){//responsible for grabbing value of the user generated guess.
    const guessInput = document.getElementById("guess");
    const guess = Number(guessInput.value);
    guessInput.value = "";
    const feedback = document.getElementById("feedback");

    numGuesses++;
    document.getElementById("num-guesses").innerHTML = numGuesses

    if (guess === num) {//tells if guess needs to be higher or lower or if its correct 
        feedback.innerHTML = "You Guessed It!!";
        reset(); 
    } else if (guess > num) {
        feedback.innerHTML = "It is lower.";
    }else {
        feedback.innerHTML = "It is higher.";
    }

    //else {
    //    feedback.innerHTML = "WRONG, try again.";
    //}
}