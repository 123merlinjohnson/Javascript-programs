export class Cars
{
constructor(price,model)
{
    this.price=price;
    this.model=model;

}
carsDetails()
{
    console.log("The car model is:"+ this.model);
    console.log("Car price is :"+this.price);

}

}