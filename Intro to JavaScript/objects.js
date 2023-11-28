//Objects - used to store multiple properties in one variable or one reference.
/*
const obj = {
    name: "Ifeatu",
}
//obj.name = "Joey"
obj.age = 13;
//console.log(obj["name"]);
console.log(obj);


const person = {
    name: "Ifeatu",
    children: [{name: "Jason"}, {name: "Joan"}],
};

delete person.name; //deletes name aka Ifeatu from the object.
console.log(person);
//console.log(person.children[0].name)


const person = {
    name: "Ifeatu",
    children: [{name: "Jason"}, {name: "Joan"}],
};
console.log("name" in person);
*/
/*
const person = {
    name: "Ifeatu",
    children: [{name: "Jason"}, {name: "Joan"}],
};

for (const [property, value] of Object.entries(person)) {
    console.log(person[property]);

}
*/
/*
const person = {
    name: "Ifeatu",
    children: [{name: "Jason"}, {name: "Joan"}],
};

for (const value of Object.values(person)) {
    console.log(value);

}

const person = {
    name: "Ifeatu",
    children: [{name: "Jason"}, {name: "Joan"}],
};

for (const value of Object.keys(person)) {//Keys is anothey for doing "in"
    console.log(value);

}
*/
/*
const person = {
    name: "Ifeatu",
    children: [{name: "Jason"}, {name: "Joan"}],
};

const p1 = person;
const p2 = person;

delete p1.name; //Affects all of the objects. Known as mutability. can be modified after being declared.

console.log(person, p1, p2)
*/
/*
const obj = {
    name: "Ifeatu"
}

const obj2 ={... obj };//The ellipis here is know as a spread and creates a copy. Without spread you'll get 'red' 'red' twice

obj2.name = "red";
console.log(obj);
console.log(obj2);
*/


const obj = {
    name: "Ifeatu",
    nums: [1, 2, 3],
}

const obj2 ={... obj, age: 2 };
//Using spread: Any properties that are immutable will be directly copied. 
//And mutable will have references copied and if the reference is changed 
//then it changes the objects within that underlaying reference.

obj.nums[0] = 100;
console.log(obj);
console.log(obj2);