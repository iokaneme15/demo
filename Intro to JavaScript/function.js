/*
function add(){
    console.log("add");
}

add();//can be called above the function and will still be executed. this is unique to JavaScript.
add();
//Functions are good for reusing code instead of using For loop. useful for organizing code.
*/

/*
function add(x, y) { //x and y are parameters
    console.log(x + y);

}

add(10, 8); //10, 8 are the arguments that are being passed.
add(5, 8); //can pass strings, arrays, pretty much anything.
*/
/*
function math(a1, a2, num = 1) {
    console.log(a1 * a2 * num);
}

math(10, 20);
math(-10, 10, -1);

//When we want to get the results without printing we use return
function math(a1, a2, num = 1) {
    return a1 * a2 * num;
}

const result = math(10, 20);
console.log(result);
*/

/*
function math(a1, a2, num = 1) {
    return [a1  ** 2, a2 ** 2];
}

const [result, result2] = math(10, 20); //Result and Result2 is used to get each individual outcome instead of just one
console.log(result, result2);
*/

function removeAllChars(arrayOfStrings, charactersToRemove) {
    const newArray = [];

    for (const str of arrayOfStrings) {
        let newStr = "";
        for (const char of str) {
            if (charactersToRemove.includes(char)) {
                continue; 
            }
            newStr += char;
                    
        }
        newArray.push(newStr);
   }
    
   return newArray;
}
const result = removeAllChars(
["Hello World", "1234", "I am the best", "yes"],
["e", "2", "t"]
);
console.log(result);

//Must use 'function' to create a function
//a function's parameters need to present the purpose of the function
//everything within the {} gets returns
//can use a return statement to exit a function early.
//function makes code reusable.