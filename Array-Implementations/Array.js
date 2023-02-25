// let arr=['a','b','c','d','e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2,4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1,-2));
// console.log(arr.slice());
// console.log([...arr]);

// //SPLICE Method Work Same But Only Difference is Muted the Elements
// //It Means Remove The elments

// arr.splice(-1);
// console.log(arr);
// arr.splice(1,2);
// console.log(arr);

// //Reverse

// arr=['a','b','c','d','e'];
// const arr2=['j','i','h','g','f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT Method

// const letters=arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);


// //JOIN Methods
// console.log(letters.join('-'));



// //LECTURE 143  Working with Array

// const array=[23,11,64];
// console.log(arr[0]);
// console.log(arr.at(0));

// //Getting Last Array Elements

// console.log(array[array.length-1]);

// console.log(array.slice(-1)[0]);
// console.log('2'+ array.at(-2));
// console.log('1' +array.at(-1));

// console.log('jonas ' .at(0));


//LECTURE 144

const movements =[200,450,-400,3000, -650, -30, 70, 1300];
// for(const movement of movements)
for(const [i, movement] of movements.entries())
{
    if(movement>0)
    {
        console.log(`Movement ${i +1 }: You deposited ${movement}`);

    }else{
        console.log(`You withdrew ${Math.abs(movement)}`);

    }
}

// How to Learn Loop Over Method

console.log('-----ForEach-----');
movements.forEach(function(move, i, ar ){

    if(move>0)
    { 

        
console.log(`Movement  ${i+ 1}: 
        You deposited ${move}`)
    }else{
        console.log(`Movement  ${i +1 }: You withdrew 
        ${Math.abs(move)}`);

    }
});

// 0: function(200)
// 0: function(450)
// 0: function(500)
//...


//LECTURE 145

const currencies =new Map([
    ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pond Sterling'],
    ['AUD', 'Australian Dollar'],

]);

currencies.forEach(function(value, key, map)
{
    console.log(`${key} : ${value}`);

})

const currenciesUnique= new Set([
    'USD','GBP','USD','EUR','EUR'

]);

console.log(currenciesUnique);
currenciesUnique.forEach(function(value, value, map){
    console.log(`
    ${value} : ${value}`);
});

//Lecture 150

const eurToUsd=1.1;

// const movementsUSD=movements.map(function(move){
//     return move*eurToUsd;
// });
const movementsUSD=movements.map(move=>
move * eurToUsd);


console.log(movements);
console.log(movementsUSD);

const movementsUSDfor=[];
for(const mov of movements)movementsUSDfor.push(mov*eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions=movements.map((
    mov,i)=>
     `Movements ${i+1} : You ${mov > 0 ? 'deposited' : 
    'withdrew'} ${Math.abs(mov)}`
    // if(mov>0)
    // {
    //     return `movements ${i+1} : You deposited ${mov}`;

    // } else{
    //     return `Movements ${i+1} : You withdrew ${Math.abs(mov)}`;

    // }
);
console.log(movementsDescriptions); 