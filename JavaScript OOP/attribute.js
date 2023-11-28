class Teacher {
    name;
    age;
    #salary; //makes salary private.

    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.#salary = salary;
        console.log(this.#getSalary());
    }
    //Private Method beacuse of the #
    #getSalary() {
        //console.log(this.#salary);
        return this.#salary;
    }
    setSalary(newSalary) {
        if (newSalary <= 0) {
            throw Error("Invalid salary, must be above 0."); //Setters and Getters are so no can break my code
        }
        this.#salary = newSalary;
    }
}
//Enscapulation allows us to hide complicated logic from other users who view our code
const teacher = new Teacher("Jose", 24, 65000);
//console.log(teacher)
//teacher.setSalary(100000);
//console.log(teacher.getSalary());
