//JavaScript is NOT an Object-orient Programming Language
//JS is a proto-typical language

/*
const obj = {
    name: "Ifeatu",
    sayHi: function (){
        console.log("hi");
    },
    toString() {
        return this.name;
    }
};

//console.log(obj.toString());

//console.log(Object.getPrototypeOf(obj));

console.log(obj.toString(obj));

//Object Prototype is built-in to JS and can be used at anytime.
//Every single prototype is an object. You can have a prototype in a prototype. A prototype is filled with things that can be used.
*/
const personPrototype = {
    greet()//this is a method
    {
        console.log(this.name);
    }
}
const ifeatu = Object.create(personPrototype);
//ifeatu.greet();
ifeatu.name = "Ifeatu";
const odera = Object.create(personPrototype);
odera.name = "Odera";

//ifeatu.greet();
//odera.greet();

const proto = Object.getPrototypeOf(ifeatu);
const proto2 = Object.getPrototypeOf(proto);

console.log(Object.getPrototypeOf(proto2))