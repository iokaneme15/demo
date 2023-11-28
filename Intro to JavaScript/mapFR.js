/*
//Map Function
const arr = [1, 2, 3, 4, 5, 6];
const squares = arr.map((x) => x ** 2);

console.log(squares);
*/
/*
const arr = [1, 2, 3, 4, 5, 6];

function map(arr, func) {
    const newArr = [];

    for (const value of arr) {
        const newValue = func(value);
        newArr.push(newValue);
    }
    return newArr;
}

const result = map(arr, (x) => x ** 2);
console.log(result);
*/
/*
//Filter functions only keeps value inside an array if they pass the filter
const arr = [1, 2, 3, 4, 5, 6];
const filteredArr = arr.filter((value) => value % 2 == 0);
console.log(filteredArr);
//the results were [ 2, 4, 6] because they passed the filter
*/
/*
//Filter Function from Scratch
const arr = [1, 2, 3, 4, 5, 6];

function filter(arr, func) {
    const newArr = [];

    for (const value of arr) {
        if (func(value)) {
            newArr.push(value);
        }
    }
    return newArr;
}
const result =filter(arr, (x) => x % 2 == 0);
console.log(result);
*/

/*
//Reduce function = reduce the values within an array or iterable object into a single value.
//Helps to keep track of operations within the array
const arr = [1, 2, 3, 4, 5, 6];
const sum = arr.reduce((prev, current) => prev + current);
console.log(sum);
*/

const arr = [1, 2, 3, 4, 5, 6];

function reduce(arr, func) {
    let currentResult = 0;

    for (const num of arr){
        currentResult = func(currentResult, num);
    }
    return currentResult;
}

const result = reduce(arr, (prev, next) => prev - next);

console.log(result);