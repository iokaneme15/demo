//Mutability helps keep you aware of what data can and can't be changed (mutable vs immutable)

//Example of immutable: true, 3, "string", undefined, null. Once defined then you can't change their value
//Sets, arrays, are mutable. Can be changed
/*
let x = 10;
const y = x; //copy of 10

x = 20; //making a new X

console.log(x, y);
*/
/*
let x = [1, 2, 3, 4, 5]; // x is storing a reference of [1, 2, 3, 4, 5]
let y = x; //copying the reference of X not the actual array 

//x[0] = 100; 
//x = [1];//modifying x or y would change each of the variables

//x[0] = 1; //using the access of the array and modifying index 0 into 1
//x = [1];// is making a new array
y = [1]; //y is not changing X
console.log(x, y);
*/

/*
let x = [1, 2, 3, 4, 5]; // x is storing a reference of [1, 2, 3, 4, 5]
let y = [...x];

y[0] = 100;//using Spread creates a new array so now Y does not affect X
console.log(x, y);
*/

/*
let x = [[1], [2], [3], [4]] //ref -> [ref -> [1], ref -> [2], ref -> [3], ref -> [4]]
let y = [...x];
y[0][0] = 100; //here we copied all the mutable objects into Y not changing just replacing.
//[0][0] this is using this ref and changes what it is referring to.
 
console.log(x, y);


//Functional use case of Mutability
//this function has a side effects that affecting the array outside of the function. Make sure you use this intentionally
function modifyArray(arr) {
    arr[0] = 100;
}

const arr = [1, 2, 3, 4];
console.log(arr);
modifyArray(arr);
console.log(arr);
*/

//Function Mutability with an Object
function modifyObj(x) {
    x.prop = "test";
}

const obj = {name: "Ifeatu"};
console.log(obj);
modifyObj(obj);
console.log(obj);