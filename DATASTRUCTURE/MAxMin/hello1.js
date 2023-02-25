// const hexadecimal=prompt(Number('Enter The Number :'));
// document.write(hexadecimal);

const numbers=[4,5,4,3,2,1];
let maximum =-Infinity;
let minimum = Infinity;
for(let number of numbers)
{
    if(number >maximum)
    maximum=number;

    if(number <minimum)
    minimum=number;

}
// document.write(maximum);
// document.write(minimum);
console.log('This is For Maximum Value : ');
console.log(maximum);
console.log('This is For Minimum Value : ');
console.log(minimum);