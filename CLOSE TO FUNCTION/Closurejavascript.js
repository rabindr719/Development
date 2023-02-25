'use strict'

// const createBooking=function(flightNum, numPassenger=1,
//      price=199*numPassenger)
// {

//     //ES5
//     // myPassengers=numPassenger || 1;
//     // price=price||199;
    
//     const booking={
//         flightNum,
//         numPassenger,
//         price
//     };
//     console.log(booking);
//     booking.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123',2,800);
// createBooking('LH123',2);
// createBooking('LH123',5);

// createBooking('LH123',undefined, 1000);


// //2nd LECTURE OF VIDEO 

// const flight='LH234';
// const jonas={
//     name: 'Rabindra Sharma',
//     passport : 76348674784
// }


// const checkIn= function(flightNum, passenger)
//     {
//         flightNum='LH999';
//         passenger.name='Mr. '+ passenger.name;

//          if(passenger.passport===76348674784){
//             alert('Checked in');
//          }else{
//             alert('Wrong Passport!');
//          }
//     }


// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// //flightNum= flight;


// // is the same as doing...

// const flightNum=flight;
// const passenger= jonas;

// const newPassport =function(person)
// {
//     person.passport=Math.trunc(Math.random()*100000000000);

// }
// newPassport(jonas);
// checkIn(flight, jonas);


// Higher ORDER Functions : LCT 3rd VIDEO

const oneWord=function(str)
{
    return str.replace(/ /g, '').toLowerCase();

};
const upperFirstWord=function(str)
{
    const [first,...others]=str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');

};
const transformer =function(str, fn)
{
    console.log(`Original string : ${str}`);
    console.log(`Tranformed string : ${fn(str)} `);

    console.log(`Transformed by : ${fn.name}`);
}
 
transformer('JavaScript is the Best!', upperFirstWord);

transformer('javaScript is the best !', oneWord);

//JS uses Callback all the Times

const high5=function()
{
    console.log('LOVE');

};
documents.body.addEventLister('click', high5);
['Jonas', 'Martha','Rabindra'].forEach(high5);


//LCTR 4th VIDEOS

const greet=function(greeting)
{
    return function(name)
    {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey=greet('Hey');
greeterHey('Ravindra_Jadeja');
greeterHey('Steven_Smith');


greet('Hello')('Ravindra');

//Challenege
const greetArr=greeting=>name=> console.log(`${greeting} ${name}`);
greetArr('Hi')('rabindra');


const lufthansa={
    airline:'Lufthansa',
    iataCode:'LH',
    bookings:[],

    ///BOOK function

    book(flightNum, name)
    {
        console.log(`${name} booked a seat on ${this.airline}
        flight ${this.iataCode} ${flightNum}`
        
        );
    }
}
lufthansa.book(239, 'Jonas Schmedtamann');
lufthansa.book(635, 'John Smith');
const eurowings={

    name: 'Eurowings',
    iataCode:'EW',
    bookings: [],

}; 

const book=lufthansa.book;
book(23, 'Sarah Williams');
