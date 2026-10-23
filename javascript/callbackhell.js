//pyramid doom and callback hell
// difficult to read , maintain the debug

/*function displayresult(a,cb1)
{
console.log("Display function invoked");
cb1(a)

}
function callbackfun1(cb2)
{
console.log("callbackfun1 invoked");
cb2()
}
function end()
{
    console.log("End function invoked");

}

displayresult("hello",(result)=>{
    console.log(result)
    callbackfun1(()=>{end()})})

*/


//Promise- javascript object(pending,fullfill,reject)
const displayResult1 = () => {
    return new Promise(() => {
        console.log(" Display function executed");
        resolve()
    }
    )

}
const callback1 = () => {
    return new Promise((resolve, reject) => {
        console.log("Callback1 function executed")
        //resolve();
        let pass = false
        if (pass) {
            resolve("Passed");

        }
        else {
            reject("Failed");
        }
    })
}

const end = () => {
    return new Promise((resolve, reject) => {
        console.log("End function executed")
        resolve();
    })
}


displayResult1().then(() =>
    callback1().then(() => 
        end().then(() => {
            console.log("Execution completed");
            resolve();
        })
    )
).catch((error) => {
    console.error("The error message is :" + error)
})