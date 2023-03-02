// const fruits=["Banana", "Orange", "Apple"," Guava"];
// document.getElementById("show").innerHTML=fruits;

// function myFunction()
// {
//     fruits.unshift("PipeApple");
//     document.getElementById("show").innerHTML=fruits;
// }


// 

function calcAge(fullname,birthYear){

    const age=birthYear-2000;
    console.log(`This is Age of ${fullname} till This year you given ${age}`);
    return age;
}
calcAge("Rabindra Kumar Sharma", 2023);

// prompt();

// Working Behind The Scence


function age(){
    let x=2000;
    const b=second();  // Give Focus Here
    x=b-x;
    return x;
}
function second(){
    const b=2023;
    return b;
}
console.log("This is You Age till date : "+age()); // Print Output in Console

// const name= 'Rabindra';

///How this Keyword is Implemented


const Rabindra={
    name : 'Rabindra Kumar Sharma',
    class : '7EC1_ Lab C',
    year : 2019,
    


};
console.log(Rabindra.name);

