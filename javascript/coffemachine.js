
//Abstraction 

class CoffeeMachine
{

    //private method
    #boilWater()
    {
     console.log("water boiling");
    }
    
#addPowder()
{
    console.log("Adding coffe Powder");

}
#addSugar()
{
    console.log("Adding sugar");
    
}

makemycoffe()
{
    ///to call fuction use this
    this.#boilWater();
    this.#addPowder();
    this.#addSugar();


    console.log();

}
withoutCoffe(){
    this.#boilWater();
    this.#addPowder();

}
}
const mycoffe=new CoffeeMachine();
mycoffe.makemycoffe();
mycoffe.withoutCoffe();


