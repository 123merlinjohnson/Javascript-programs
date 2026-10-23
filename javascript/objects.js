//java script objects
import testData from "./jsonobj.json" with {"type":"json"}
const testobj=JSON.stringify(testData);
const obj=JSON.parse(testobj);
console.log(obj.id);
console.log(obj.name);

const person={
firstname:"Merlin",
lastName:"Johnson",
age : 27,
is_Employee:true
}

console.log(person);
console.log("*************************");
console.log(person.firstname);//dot notation
console.log(person["age"])//bracket notation
person.city="Kochi";
console.log("*************************");
console.log(person);
//update
person.lastName="Albert"
console.log(person.lastName);
console.log(person);
console.log("*************************");
// for in loop to print object

for(const key in person){
console.log(key);
}

//to get values of the objects


for(const key in person){
console.log(key+":"+person[key]);
}
console.log("*************************");
const student={
    st_name:"Arya",
    st_id:1234,
    age:23,
    course:"Automation",
    subjects:["Playright","javascript"],
    getdetails:function(){
        return `${this.st_name} is learning ${this.course}`;
    }

    }

for(const key in student){
    if(typeof student[key]=="function")
    {
        console.log(student[key]());
    }
    else{
    console.log(key+":"+student[key]);
    }

}







