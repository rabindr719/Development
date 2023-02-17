const MarkWeight=78;
const MarkHeight=1.69;
const JohnWeight=92;
const JohnHeight=1.69;


const BMIMark=MarkWeight/MarkHeight**2;
const BMIJohn= JohnWeight/JohnHeight**2;

// This is Printing the Values 2 : 

console.log(BMIMark);
console.log(BMIJohn);
console.log("This is Improvement ");
console.log(`Body Mass Index Value of Mark : ${BMIMark}`);
console.log(`Body Mass Index Value of John : ${BMIJohn}`);

//Second Value

const MarkWeight2=78;
const MarkHeight2=1.69;
const JohnWeight2=92;
const JohnHeight2=1.69;

// Calculation of Value according to Questions : 

const BMIMark2=MarkWeight2/MarkHeight2**2;
const BMIJohn2= JohnWeight2/JohnHeight2**2;

// This is Printing the Values 2 : 

console.log(BMIMark2);
console.log(BMIJohn2);
console.log("This is Improvement of 2 :");
console.log("This is For Seond Value :");
if(BMIMark2>BMIJohn2)
{
    console.log(`Body Mass Index Value of Mark 2 : ${BMIMark2}`);
}else
{
    console.log(`Body Mass Index Value of John 2 : ${BMIJohn2}`);
}



