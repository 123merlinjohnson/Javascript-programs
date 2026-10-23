class Car{
//let brand = "Maruthi";
detailsDisplay()
{
console.log("car method");
console.log("CAr brand :"+this.brand);
console.log("Car price:"+this.price);
}
constructor(brand,price)
{
    console.log("constructor invoked");
    this.brand=brand;
    this.price=price;
    
}
}
const car=new Car("ABC",500000); //car -object.variable should always be the same name as the class name
car.detailsDisplay();
const carobj1=new Car("Honda",700000);
carobj1.detailsDisplay();


