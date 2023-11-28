//Arrow functions have a different style to standard function
/*
const func = (x, y) => {
    console.log(x + y);
}

console.log(1, 2);

//you can defined the return condition after arrow but if you use {} then 'return' keyword is necessary 
const func = (x, y) => x + y; {
    return x + y
};

const result = func(1, 2);
console.log(result);
*/
/*
//Can return an object in this shorthand
const func = (x, y) => ({x: x, y: y});

const result = func(1, 2);
console.log(result);
*/

/*
//Standard Function

function getName() {
    return this.firstName + " " + this.lastName
}

const person = {
    firstName: "Ifeatu",
    lastName: "Okaneme",
    getName: getName,
};

const person2 = {
    firstName: "Andrew",
    lastName: "McKay",
    getName: getName,
};

const personName = person2.getName();

console.log(personName);
*/

//Arrow Function method
const getName = () => { //When using Arrow your accessing the 'this' keyword wherever it is defined.
    return this.firstName + " " + this.lastName
}

const person = {
    firstName: "Ifeatu",
    lastName: "Okaneme",
    getName: getName,
};

const person2 = {
    firstName: "Andrew",
    lastName: "McKay",
    getName: getName,
};

const personName = person2.getName();

console.log(personName);