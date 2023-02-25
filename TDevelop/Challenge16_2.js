// const Dolphins =(96+108+89)/3;
// const Koalas =(88+91+110)/3;

// console.log("This is the Value of 3rd Challenge ");
// console.log(Dolphins, Koalas);

const calAge=function (birthyear){
    return 2035-birthyear;
}
const yearUntilRetirementyearUntilRetirement =function(birthYear, firstName)
    {
        const age=calAge(birthYear);
        const retirement =65-age;


        if(retirement >0){
            console.log(`${firstName} retires in ${retirement} years`);
            return retirement;
        }
        else{
            console.log(`${firstName} is areaday retired in ${retirement}`);
            return -1;
        }
    }
console.log(yearUntilRetirementyearUntilRetirement(1950, 'MarkWood'));
console.log(yearUntilRetirementyearUntilRetirement(1991, 'Steven Smith'));