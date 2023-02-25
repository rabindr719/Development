// Closure Look to The Functions 
const outerfunction=(a)=>
{
    let b=20;
    //Second Function inside the First Function 
    const innerfunction=()=>{
        let mul=a*b;
        console.log(`The Multiply of ${mul}`);
        
    }
    
    //Return the innerfunction
    return innerfunction;
}
//Here we Create a new Variable for Store the Value of Parametrized Function
let inner=outerfunction(6);

//Give The Dir for take function heap calling
console.dir(inner);

//called for Output
inner();
    