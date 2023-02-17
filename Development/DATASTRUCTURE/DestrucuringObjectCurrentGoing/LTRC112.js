

const hours ={
    thu:{
        open:12,
        close:22,
    },
    fri:{
        open:11,
        close:23,
    },
    sat:{
        open:0,
        close:24,
    }};





const Resturant={
    name:'Classico Italino',
    location:'Via Angelo Tavanti 23',
    categories: ['Italino','Pizzerria','Vegeterian','Organic'],
    starterMenu:['Focaccia','Bruschetta','GarlicBread', 'Caprese Salad'],
    mainMenu:['Pizza', 'Pasta','Risto'],

    //ES6 enhnce object literals

    openingHours,
    // openingHours :{
    //     // thu:{
        //     open:12,
        //     close:22,
        // },
        // fri:{
        //     open:11,
        //     close:23,
        // },
        // sat:{
        //     open:0,
        //     close:24,
        // },


    order :function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
         },
         orderDelivery : function({
             starterIndex=1,
             mainIndex=0,
             time='20:10',
             address,
            })
         {
            console.log(`Order Received! 
            ${this.starterMenu[starterIndex]}
             and ${this.mainMenu[mainIndex]} 
             will be delivered on ${address} at ${time}`);
         }},
    orderPasta : function(ing1, ing2, ing3)
         {
            console.log(`Here is your delicious pasta 
            ${ing1}, ${ing2}, and ${ing3}`);
         },
    orderPizza : function(mainIgrediants, ...otherIndegrients)
    {
        console.log(mainIgrediants);
        console.log(otherIndegrients);
    }
    
}; 
//LECTURE 111

const menu =[...Resturant.starterMenu, ...Resturant.mainMenu];
for(const item of menu) console.log(item);

for(const [i,el] of menu.entries())
{
    console.log(`${i+1} : ${el}`);
}


// console.log([...menu.entries()]);

//LECTURE 109

// const rest1=
//     {
//          name : 'La Piazza',
//         //  owner : 'Giovanni',
//         numGuests:0
//     }
// const rest2=
// {
//     name : 'Capri Sweets',
//     owner: 'Goswamui Mobile'
// };


// rest2.numberGuests= rest1.numberGuests || 10;
// rest2.numGuests=rest2.numGuests|| 10;

// rest1.numGuests ||=10;
// rest2.numGuests||=10;

rest1.numGuests ??=10;
rest2.numGuests ??=10;

// rest1.owner=rest1.owner && '<ANONYOMOUS>'
// rest1.owner=rest2.owner && '<ANONYOMOUS>'


rest1.owner&&= '<ANONYOMOUS>'
rest2.owner&&= '<ANONYOMOUS>'



console.log(rest1);
console.log(rest2);




//Lecture 108  


Resturant.numGuests=0;
// const guests1= Resturant.numGuests ?
// Resturant.numGuests:10;

// console.log(guests1);

const guests=Resturant.numGuests || 10;
console.log(guests);

//Nullish Null undefined (NOT 0 or or '') 

const guestCorrect=Resturant.numGuests?? 10;
console.log(guestCorrect);



//Lecture Number 107 Short Circuit ???????????????????????????????????????????????


//They Can Use any daata Types , Return any datatypes, short-circuiting
//  console.log('---- OR ----');


// console.log(3|| 'Jonas');  //3
// console.log('' || 'Jonas'); //Jonas
// console.log(true || 0); //true
// console.log(undefined || null); //undefined


// console.log(undefined || 0 || ''|| 'Hello' || 23|| null);

// Resturant.numGuests=23;
// const guests1= Resturant.numGuests ? Resturant.numGuests:10;

// console.log(guests1);
// const guests2=Resturant.numGuests || 10;
//console.log(guests2);
 
// console.log(guests2);
// console.log('----AND ----'); 
// console.log(0 && 'John');
// console.log(7 && 'John');

// console.log('Hello ' && 23 && null && 'John');

// if(Resturant.orderPizza)
// {
//     Resturant.orderPizza('mushrooms', 'spinach');
// }

// Resturant.orderPizza && Resturant.orderPizza('mushrooms', 'spinach');




// SPREAD , because on Righyt side of 

const arr=[1,2,...[3,4]];

const[a,b,...others]=[1,2,3,4,5];
console.log(a,b, others);

const [Pizza, ,Risto, ...otherFood]=[...Resturant.mainMenu, ...Resturant.starterMenu,];

console.log(Pizza, Risto, otherFood, bread);
 const {sat, ...weekdays}=Resturant.openingHours;
 console.log(weekdays);
 const add=function(...numbers)
 {
    console.log(numbers);
    let sum=0;
    for(let i=0; i<numbers; i++)
    sum+=numbers[i];
 };

 add(2,3);
 add(5,3,7,2);
 add(8,2,5,3,2,1,4);

 const x=[23,5,7];
 add(...x);

 Resturant.orderPizza('mushroom','onion','olives','spinach');
 Resturant.orderPizza('mushroom');


// const arr=[7,8,9];
// const badNewArr=[1,2,arr[0], arr[1],arr[2]];
// console.log(badNewArr);

// const newArr= [1,2,...arr];
// console.log(newArr);
// console.log(...newArr);
// console.log(1,2,7,8,9);

// const newMenu =[...Resturant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy Array

// const mainMenuCopy=[...Resturant.mainMenu];

// //Join 2 Arrays

// const menu=[...Resturant.starterMenu, ...Resturant.mainMenu];
// console.log(menu);
 

// //We spread Operator for pass the value in the array
// console.log(menu);
// const str='Jonas';
// const letters=[...str, ' ','S.'];
// console.log(letters);
// console.log(...str);

// const indgredients =[
//     prompt("Lets make pasta ! Ingredient 1? "),
//     prompt('Ingredient 2?'),
//     prompt('Ingredients 3?')
// ];

// console.log(indgredients);
// Resturant.orderPasta(indgredients[0], indgredients[1], indgredients[2]); 
// Resturant.orderPasta(...indgredients);

// const newResturant={foundedIn : 1998, ... Resturant , founder:'Guiseppe' };
// console.log(newResturant);

// const ResturantCopy={...Resturant};
// ResturantCopy.name='Ristorante Roma';
// console.log(ResturantCopy.name);
// console.log(Resturant.name);