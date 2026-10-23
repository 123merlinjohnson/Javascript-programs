"use strict";
class Employee {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    displayEmployee() {
        console.log(this.name + " " + this.id);
    }
}
const emp = new Employee("Meera", 40);
emp.displayEmployee();
