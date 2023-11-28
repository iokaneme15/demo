//Maps are used to associate a key to a value. Creates flexibility of keys
// [0, 1, 2, 3] "stre" will not work

//[["1", 3]] makes it easier to find these values using a map
/*
const m = new Map();
m.set("a", 3);
m.set("b", 2);
m.set("a", 4);
console.log(m);

const m = new Map();
m.set("a", 3);
m.set("b", 2);
m.set("a", 4);
console.log(m.get("a"));


const m = new Map();
m.set("a", 3);
m.set("b", 2);
m.set("a", 4);
m.delete("a")
console.log(m.has("a"));//Checking the unique keys NOT the values

const m = new Map();
m.set("a", 3);
m.set("b", 2);
m.set("a", 4);
m.delete("a")
console.log(m.size);
*/

//Keep tracking of the frequency of the array using a Map
const str = "Hello World my name is Ifeatu";
const freq = new Map();

for (const char of str) {
    if (freq.has(char)) {
        freq.set(char, freq.get(char) + 1);
    } else {
        freq.set(char, 1);
    }
} 
console.log(freq) //Gets the frequency of each individual key
//console.log(freq.get("I")); //Get the frequency of a specific char
//freq.delete(" "); //Can delete elements as well