"use strict";
let mark = 25;
let subject = "Hi";
let isPassed = true;
let age = 28;
//age="twenty";not allowed due to type safety
function getMark(mark) {
    console.log(mark);
}
function getTotalmark(a, b) {
    return a + b;
}
function hello() {
    console.log("Hello world");
}
getMark(10);
console.log(getTotalmark(10, 5));
let numbers = [10, 20, 30];
let fruits = ["apple", "orange", "Banana"];
let person = {
    name: "John",
    age: 30,
    city: "Kottayam"
};
console.log(numbers);
console.log(fruits);
console.log(person);
