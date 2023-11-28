/*const arr = [10, 20, "hello", 2, 3];
arr [arr.length + 2] = 100;
console.log(arr.length);
*/

//const arr = new Array(20); //you'll get 20 empty items
//const arr = new Array("20");

//console.log(arr);
/*
const arr = [];

const name1 = prompt("Enter your name ");
const age = prompt("Enter your age ");
const hairColor = prompt("Enter your hair color");

if (name1 !== "") arr.push(name1); //push adds to the end of an array
if (age !== "") arr.push(age);
if(hairColor !== "") arr.push(hairColor);

//alert(arr);

const del = prompt("Would you like to delete the last element")

if (del === "yes") arr.pop(); //pop removes from the end of an array

alert(arr);
*/
const arr = [];
const arr2 = [1, 2, 3];
const arr3 = [3, 4, 5, ["hello"]];

arr.push(arr2);
arr.push(arr3);

console.log(arr[1][3][0]);

//nested arrays also called dimensional arrays. 2D arrays have two nested arrays and 3D are with 3
//[[]] = 2D; [[[]]] = 3D