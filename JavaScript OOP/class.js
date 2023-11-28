//Person, Teacher, Student, Class

//See the way that these objects will interact with each other and which attributes, properties and method they have.

/*Person
    - name
    - age

Teacher
    =salary
    =teach()
    =grade()

student
    -greet()

Class
    - students
    = teacher
*/
//For most program language you first come up with the class (shown above) and the instances associated with the class
//Enscapulation 

//Syntax for defining a class. 'class' keywords then begin with a Capital letter then {} 
class Person {
    name;//denoting that every person has a name and age
    age;

    //Constructor is a function that happen everytime a class is called
    /*Constructors are not required
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    */

    sayHi(shouldSayBye) {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
        if (shouldSayBye) {
            console.log("Bye");
        }
    }
}

const person = new Person("Ifeatu", 26);
person.color = "red";
const person2 = new Person("Anthony", 28);
console.log(person.color);
//person.sayHi(false);
//person2.sayHi(true);
