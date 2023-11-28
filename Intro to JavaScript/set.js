//Set are similar to an array. They run faster than an array. A set is good for adding, removing and checking if something exist

//Sets maintain an order. Holding unique elements (no duplicate). Used to check if soemthing exist or not
/*
const s = new Set([1, 2, 3, 4, 4, 3, 2, 1]);
s.add(-1);
s.delete(4);
console.log(s.has(1));
//s.has returns a boolean

*/
/*
const arr = [1, 3, 4, 5, 2, 1, 31, 2];
// idx = index
for (const [idx, value] of arr.entries()) { //looping through all the values in the array
    for (const value2 of arr.slice(idx + 1)){//then for each value need to loop through again
        if (value === value2) {
            console.log("Found duplicate of", value);//never checking the same value in both of these for loops
            break;
        }
    }//this is very inefficient for large arrays because were checking each individual value 
     //and then looping back to the next one
}

//Simpler Way
const arr = [1, 3, 4, 5, 2, 1, 31, 2];
const numbers = new Set();//using Set to check if an element is unique

for (const value of arr.) { 
    if(numbers.has(value)) {
        console.log("Found duplicate of", value);
    }    //when looking at this value wants to check if its in the Set. Meaning we already found it
    numbers.add(value);  //adding the value into the Set after performing the above check.
 }
*/
 const arr = [1, 3, 4, 5, 2, 1, 31, 2];
 const numbers = new Set(arr);
 const uniqueNumbers = Array.from(numbers); //allows us to pass a iterable object. pass it to Array.from to create an Array 
 console.log(uniqueNumbers);