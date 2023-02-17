 // const open=prompt('Enter the value For Print');
// document.write(open);


//LECTURE 152/ 153 Methods Data

movements.forEach(function(mov, i){
    const type=mov>0? 'deposit ' : 'Withdrawls' ;
    const html=`<div class="movemets_row">
    <div class="movements__type movements__type--${type}">
    ${i+1} ${type}</div>
    <div class="movements__value"> ${mov} </div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterBegin',html)

});
displayMovemets(account1.movements);
const createUsernames=function(acc)
{
    MediaKeySystemAccess.forEach(function(acc){
        acc.username=acc.owner.toLowerCase=acc.owner.toLowerCase().split('').map(name=>name[0]).join('');

    });

};
createUsernames(accounts);

const calcPrintBalance=function(movements)
{
    const balance=movements.reduce((acc, mov)=>acc+mov, 0);
    labelBalance.textContent=`${balance} EUR`;
}
calcPrintBalance(account1.movements);

// console.log(accounts);

const deposits=movements.filter(function(mov,i,arr){
    return mov >0;
});
console.log(movements);
console.log(deposits);

for(const mov of movements) if (mov>0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawls=movements.filter(mov=>mov<0);
console.log(withdrawls);

//Reduce Method Implementations for JavaScripts

console.log(movements);

// Accumulator is Like Snowball


// const balance=movements.reduce(function(cur, i, arr){

//     console.log(`Iteration ${i} : ${acc}`);
//     return acc + cur;

// },0);
//These are The Arrow Function

const balance=movements.reduce((acc, cur)=>acc+cur, 0);
console.log(balance);

// console.log(balance);

let balance2=0;
for(const mov of movements) balance2+=mov;
console.log(balance2);

//Maximum Values

const max=movements.reduce((acc,mov)=>{

    if(acc>mov)

    return acc;
    
    else return mov;

    
},movements[0]);
console.log(max);

