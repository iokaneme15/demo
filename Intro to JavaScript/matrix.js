/* Example 1
//[[1, 2, 3],
//[4, 5, 6,],
//[7, 8, 9,]]

const matrix = [];

for (let i = 0; i < 3; i++) {
    const numbers = [];

    for (let j = i * 3; j < i * 3 + 3; j++) {
        numbers.push(j + 1);
    }

    matrix.push(numbers);
}

console.log(matrix);
*/
//Example 2
/* [
    [[1, 2], [3,4], [5, 6]],
    [[7, 8], [9, 10], [11, 12]]
]
*/
/*
const matrix2 = [];
for (let l = 0; l < 6; l++) {
    const numbers2 = [];
    
    for (let n = l * 2; n < l * 2 + 2; n++) {
        numbers2.push(n + 1);
    }

    matrix2.push(numbers2);
}
console.log(matrix2);

*/ //VICTORY I COMPLETED THE EXAMPLE2 ON MY OWN. WITHOUT HAVING TIM EXPLAIN IT FIRST.

//Instructor Version
const matrix = [];
for (let i = 0; i < 2; i++) {
    const arr = [];
    
    for (let j = 0; j < 3; j++) {
        const numbers = [];
        
            const start = i * 6 + j * 2 + 1;
        for(let k = start; k < start + 2; k++) {
            numbers.push(k);
        }

        arr.push(numbers);
    }
    matrix.push(arr)
} 
console.log(matrix);
of 