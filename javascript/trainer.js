import { Person } from "./person.js";

class Trainer extends Person
{
    
        getRoles()
        {
            console.log("I am a trainer");
        }
    introduce(){
        console.log("My name is Merlin, I am a software tester");
    }
}
    const trainer1 = new Trainer();
    trainer1.introduce();
    trainer1.getRoles();
    const person1=new Person();
    person1.introduce();






