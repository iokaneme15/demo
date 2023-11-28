/*function enterUsername (e) {
    e.value = "";
    alert(e); //equals whatever was responsible for calling the function.
}
*/
/*
const person = {
    name: "Ifeatu",
    lastName: "Okaneme",
    getName: function() {// this function is associated with the property name of 'getName' so it doesnt need to be defined
        console.log(this.name + this.lastName)
    }
}

person.getName();
*/
/*
const person = {
    name: "Ifeatu",
    lastName: "Okaneme",
    getName: function() {// this function is associated with the property name of 'getName' so it doesnt need to be defined
        console.log(this.name + this.lastName);
    }
}

function test() {
    console.log("test");
}

const v = test; //Referencing the function NOT calling it.
v();
*/

function test(){
    console.log(this);
}
test(); //Accessed the global object