let lastname='Williamson';
let oldName= lastname;
lastname='Davis';
// console.log(lastName, oldName)


const jessica=
{
    firstName:'Jessica',
    lastname:'Williamson',
    age:27
};

const marriedJjessica= jessica;
    marriedJjessica.lastname= 'Davis';
    console.log("UnMarriied Jessica : "+jessica);
    console.log("Married Jessica : "+marriedJjessica);



    //This is another part of video

const jessica2={
    firstName: 'Jessica',
    lastName : 'Williams',
    age : 27,
    family : ['Alice ', 'Bob'],

};
const jessicaCopy =Object.assign({}, jessica2);
jessicaCopy.lastName='Davis';

jessicaCopy