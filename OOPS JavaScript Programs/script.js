'use strict';

//Constructor in javascript 

const Person =function(firstName, birthyear)
{
   //this.firstName =firstName;
   this.birthyear =birthyear;
   this.firstName =firstName;
}

const rabindra=new Person('Rabindra',2023- 2000);
console.log(rabindra);

const arjun=new Person('Arjun' ,2023-2007);
//console.log(arjun);

const ravi=new Person('ravishankar', 2023-2005);
console.log(arjun, ravi);

//Prototypes , In javascript all function are Protypes
console.log(Person.prototype);

Person.prototype.calcAge= function()
{
    console.log(2037-this.birthyear);
};

rabindra.calcAge();
arjun.calcAge();

console.log(Person.prototype.isPrototypeOf(rabindra));
console.log(Person.prototype.isPrototypeOf(Person));

//prototypes of LinkedObjects

Person.prototype.species='Homo Sapiens';
console.log(rabindra.species, arjun.species);

console.log(rabindra.hasOwnProperty('firtsName'));
console.log(arjun.hasOwnProperty('species'));

// Object.protototype (top of prototype chain)
console.log(rabindra.__proto__.__proto__);
console.log(rabindra.__proto__.__proto__.__proto__);



const arr=[3,6,6,6,7,8,9,9];
console.log(arr.__proto__=== Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique =function()
{
    return [...new Set(this)];
}
console.log(arr.unique());


const h1= document.querySelector('h1');