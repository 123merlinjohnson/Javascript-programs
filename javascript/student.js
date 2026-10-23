class Student{

displaymarks()
{
console.log("Student Details");
console.log("Student Name :"+this.name);
console.log("Student sub1 :"+this.mark1);
console.log("Student sub2 :"+this.mark2);
console.log("Student sub3 :"+this.mark3);
console.log("Student sub4 :"+this.mark4);
console.log((this.mark1+this.mark2+this.mark3+this.mark4)/4);
}
constructor(name,mark1,mark2,mark3,mark4)
{
    console.log("constructor");
    this.name=name;
    this.mark1=mark1;
    this.mark2=mark2;
    this.mark3=mark3;
    this.mark4=mark4;
    
}
}
const stud1=new Student("Merlin",90,78,80,89); //car -object.variable should always be the same name as the class name
stud1.displaymarks();
const stud2=new Student("Anju",95,70,89,96); //car -object.variable should always be the same name as the class name
stud2.displaymarks();
const stud3=new Student("Aswathy",89,90,78,96); //car -object.variable should always be the same name as the class name
stud3.displaymarks();