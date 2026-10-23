import {Cars} from "./cars.js"
class Honda extends Cars
{
    constructor(color,model,price)
    {
      super(price,model)
      this.color=color;

    }

hondaDetails()
{
console.log("Model: "+ this.model+" Color:"+ this.color+" Price:"+this.price);  
}
}
const obj1=new Honda("Red","Civic",400000);
obj1.carsDetails();
obj1.hondaDetails();
const carobj=new Cars(600000,"City")
carobj.carsDetails();
