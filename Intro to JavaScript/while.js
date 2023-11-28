/*let i = 0;
while (i < 10 && true) {
    console.log(i);
    i++; //needs a ending condition or a infinite loop will be created.
}

let number = Number(prompt("Enter a number between one and ten... "));

while  (!(number >= 1 && number <= 10)){
    number = Number(prompt("Enter a number between one and ten... "));
}

console.log(number);
*/
/*
let number; //Variable called "number"

do { //will happen only 1 time
    number = Number(prompt("Enter a number between one and ten... "));
}while  (!(number >= 1 && number <= 10)); //while this condition is ture

console.log(number);
*/

//this is the opposite of previous example. when the number is in the range, we break out of the loop 
while  (true){
   const number = Number(prompt("Enter a number between one and ten..."));
    if (number >= 1 && number <= 10) break;
    //continue skips the iteration and goes to the top of the while loop. alternative to 'break'.
}; //while this condition is ture

console.log(number);