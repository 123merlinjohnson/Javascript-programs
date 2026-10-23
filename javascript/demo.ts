let mark:number=25;
let subject:string="Hi";
let isPassed:boolean=true;

let age:number=28;
//age="twenty";not allowed due to type safety


function getMark(mark:number):void 
{
console.log(mark);

}
function getTotalmark(a:number,b:number):number //retun type
{
    return a+b;

}
function hello()
{
    console.log("Hello world");  
}

getMark(10);
console.log(getTotalmark(10,5));



let numbers: number[]= [10,20,30]
let fruits:string[]=["apple","orange","Banana"]
let person:{name:string,age:number,city:string}=
{
    name: "John",
    age:30,
    city:"Kottayam"
}
console.log(numbers);
console.log(fruits);
    console.log(person);
