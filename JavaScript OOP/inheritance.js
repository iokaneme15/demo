//Inherit based level functionality

//Base class

class Person {
    name; 
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        
    }

    greet() {
        return this.name + " " + this.age;
    }
}
class Teacher extends Person {
    salary;
    
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }

    //Modifying the greet() method from the Person parent class
    greet() {
        return "I am the teacher " + super.greet(); //using a property from the superclass in the child class.
    }
}
//Student inherits all the functionality of the Person class by using extends keywod
//Person is the superclass/parent class; Student is the child class or derived class
class Student extends Person {
    group;

    constructor(name, age, group){
        super(name, age); //superclass is the base class. and whatever is inheriting from it is the child class.
        //super keyword calls the constructor from the parent class.
        this.group = group;
    }
}
//Extends reuses all of the logic from a parent class in a child class.
const s1 = new Student("Ifeatu", 15, "A");
const t1 = new Teacher("David", 27, 60000)
console.log(s1.greet());
console.log(t1.greet());
//We use parent and child class to reuse inheritance to other classes