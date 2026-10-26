// encapsulation - hide data

class BankAccount
{
// private - can't use outside of a class (#)
    #balance   
    Accountholder
    constructor(initialbal,Accountholder)
    {
        this.#balance=initialbal;
        this.Accountholder= Accountholder;
      
    }
    showBalance()
    {
        console.log(this.#balance);
    }
    deposit(depositAmount)
    {
        if(depositAmount>0)
        {
            this.#balance +=depositAmount; 
        }
        else{
            console.log("invalid deposit amount");

        }
    }
    witdraw(withdramount)
    {
        if(withdramount>0)
        {
            this.#balance -=withdramount; 
        }
        else{
            console.log("invalid withdrawal amount");

        }
    }

}
const bankobj=new BankAccount(100,"Johnson");
bankobj.showBalance();
bankobj.deposit(1000);
bankobj.showBalance();
bankobj.witdraw(30);
bankobj.showBalance();
//bankobj.Accountholder="Albert"



