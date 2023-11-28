class Person {
    name;
    static numberOfPeople = 9; //Static keyword; quick example not an actual good way of using static

    constructor(name) {
        this.name = name;
        Person.numberOfPeople++;
    }

    static getNumberOFPeople() {
        if(this.numberOfPeople >= 10) this.removePerson();
        return this.numberOfPeople; //this keyword used in a static method accesses the class itself
    }

    static removePerson() {
        this.numberOfPeople--;
    }
}

const p  = new Person("Ifeatu");
const p2 = new Person("Miguel");

//Person.removePerson();
//console.log(Person.numberOfPeople);
console.log(Person.getNumberOFPeople());

//Static means it not related to specific instance but just related to a class.