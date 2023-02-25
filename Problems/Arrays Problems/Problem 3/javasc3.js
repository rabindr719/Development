const calcAverageHumanAge=function(ages)
{
    const humanAges=ages.map(age=>(age<=2? 2*
         age : 16+age*4));

    const adults=humanAges.filter(ages=> age >=18);

    const average=adults.reduce(
        (acc,age,i,arr)=>acc+age/arr.length,0);

    return average;

};


const avr1=calcAverageHumanAge([5,2,4,1,15,8,3]);
const avr2=calcAverageHumanAge([16,6,10,5,6,1,4]);

console.log(avr1, avr2);