// const checkDogs = function(dogsJulia, dogsKate)
// {
//     const dogsJuliaCorrected =dogsJulia.slice();
//     dogsJuliaCorrected.splice(0,1);
//     dogsJuliaCorrected.splice(-2);

//     //dogsJulia.slice(1,3);

//     const dogs=dogsJuliaCorrected.concat(dogsKate);
//     console.log(dogs);

//     dogs.forEach(function(dog, i){
//         if(dog>=3){
//             console.log(`Dog number ${i+1} is an adult , and is 
//             ${dog} years Old`);
//         }else{
//             console.log(`Dog number ${i+1} is Still a puppy `);
//         }
//     })
// };
// checkDogs([3,5,2,12], [4,1,15,8,3]);
// checkDogs([9,16,6,8,3],[10,5,6,1,4]);


// Problem 2 Solutions or Implmentations

   const calcAveargeHumanAge=function(ages){
   const humanAges=ages.map(age =>(age <= 2 ? 2* age : 16 + age *4));

   const adults=humanAges.filter(age=>age>=18);

   console.log(humanAges);
   console.log(adults);

//    const average=adults.reduce((acc, age)=> acc + age, 0) /adults.length;
const average =adults.reduce((acc,age, i,arr)=>
acc+ age/arr.length, 0);

return average;
};
const avg1=calcAveargeHumanAge([5,2,4,1,15,8,3]);
const avg2=calcAveargeHumanAge([16,6,10,5,6,1,4]);

console.log(avg1, avg2);