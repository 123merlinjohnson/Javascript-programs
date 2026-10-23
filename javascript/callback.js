function displayresult(result)
{
    console.log(result);
}
function sum(a,b,callback)
{
    let c=a+b;
    callback(c);
}
function substract(p,q,callback)
{
    let r=p-q;
    callback(r);
}
sum(10,20,displayresult);
substract(80,10,displayresult);



