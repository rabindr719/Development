const passenger='rABindra';
const passengerLower=passenger.toLowerCase();
console.log(passengerLower);
const UpperCase=passengerLower.toUpperCase();
console.log(UpperCase);
const passengerCorrect=passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email='hello@rabindra.com';
const loginEmail='Hello@rabindra.Io \n';
const lowerEmail=loginEmail.toLowerCase();
const trimmedEmail=lowerEmail.trim();
console.log(trimmedEmail);
const normalizedEmail=loginEmail.toLowerCase().trim();
console.log(email===normalizedEmail);


const priceGB='288,97£';
const priceUS=priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement='All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door','Gate'));

//For Replace All Matched Word Using These Methods

console.log(announcement.replace(/door/g,'Gate'));
console.log(announcement.replaceAll('door','Gate'));

//Boolean 

const plane='A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if(plane.startsWith('Airbus') && plane.endsWith('neo'))
{
    console.log('part of the New ARirbus family');

}

const checkBaggage=function(items){

    const baggage=items.toLowerCase();
    // const baggage=items;
    if(baggage.includes('Knife') || baggage.includes('gun'))
    {
        console.log('You are not alloed to Board');
    }else{
        console.log('Welcome to Aboard!');
    }
       
    {
        console.log('Welcome Abroad!')
    }

}

checkBaggage('I have a Laptop , some food and a Pocket Knife');

checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and a Gun for protection ');



//Lecture 123
//Split and Join
console.log('a+very+nice+string+'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName , lastName ]='Jonas Schedmann'.split(' ');

const newName =['Mr.', firstName , lastName.toUpperCase()].join(' ');
console.log(newName);

const capitaLizeName =function(name)
{
    const names =name.split(' ');
    const namesUpperCase=[];

    for(const n of names)
    {
     //namesUpperCase.push(n[0].toUpperCase()+ n.slice(1));
     namesUpper.push(n.replace(n[0], n[0].UpperCase()));
    }
    console.log(namesUpper.join(' '));

}
 capitaLizeName('jessica ans smith davis');
 capitaLizeName('jonas schedtmann');


 //Paddding

 const message='Go to Gate 23!';
 console.log(message.padStart(25, '+').padEnd(30, '+'));

 console.log()
 console.log('Jonas'.padStart(25, '+').padStart(30,'+'));

 const maskCreditCard=function(number)
 {
    const str=number +'';
    const last=str.slice(-4);
    return last.padStart(str.length, '*');
 }

 console.log(maskCreditCard(86843689));
 console.log(maskCreditCard(433784638646874384));
 console.log(maskCreditCard('84682368947689734794379'));

//Repeat

const message2='Bad weather ... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine=function(n)
{
    console.log(`There are ${n} planes in Line ${King.repeat}`);
}
planesInLine(5);
planesInLine(3);
planesInLine(12);


