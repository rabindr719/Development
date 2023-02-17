/*/*const account1={
//     ownwer: 'Jonas Schmedtann',
//     movements : [200, 450,-450, 3000,-600, -130,70, 1300],
//     interestRate: 1.2,
//     pin : 1111,
// };

// const account2={
//     owner :'Jessica davis',
//     movements : [5000,3400,-150,-750,-3210,-1000,
//     8500,-30],
//     interestRate:1.5,
//     pin :2222,
// };

// const account3={
//     owner : 'Steven Smith',
//     movements: [200, -200,340,-300,-20,50,400, -460],
//     interestRate:0.7,
//     pin:3333,

// }

// const account4={
//     owner : 'Virat Kohli',
//     movements:[430,1000,700,50, 90],
//     interestRate: 1,
//     pin : 4444,
// }
// const accounts=[account1, account2, account3, account4];

// const labelWelcome=document.querySelector('.welcome');
// const labelDate=document.querySelector('.date');
// const labelBalance=document.querySelector('.balance_value');
// const labelSumIn=document.querySelector('.summary_value--in');
// const labelSumOut=document.querySelector('.summary__value--out');
// const labelSumInterest=document.querySelector('.summary__value__interest');
// const labelTimer=document.querySelector('.timer');
// const conatainerApp=document.querySelector('.app');
// const conatinerMovement=document.querySelector('.movements');

// const btnLogin =document.querySelector('.login__btn');

// const btnTransfer=document.querySelector('.form.btn--transfer');
// const btnLoan=document.querySelector('.form__btn--loan');
// const btnClose=document.querySelector('.form__btn--close');
// const btnSort=document.querySelector('.btn--sort');
// const inputLoginUsername=document.querySelector('.login__input--user');
// const inputLoginPin=document.querySelector('.login__input--pin');
// const inputTransferTo=document.querySelector('.form__input--to');
// const inputTransferAmount=document.querySelector('.form__input--amount');
// const inputLoanAmount=document.querySelector('.form__inpu--0loan--amount');
// const inputCloseUsername=document.querySelector('.form__input--user');
// const inputClosePin=document.querySelector('.form__input--pin');

// const displayMovements=function(movements)
// {
//     containerMovements.innerHTML='';

//   movements.forEach(function(mov, i){
//     const type=mov>0 ?'deposited' : 'withdrew';

//     const html=`
//     <div class="movements__row">
//     <div class="movements__type movements_type--
//     ${type}">${i+1} ${type}</div>
//     <div class="movements__type movements__type--${mov}">
//     </div> `;

//     containerMovements.insertAdjustmentHTML('afterBegin', html);
//      });

// };
// displayMovements(account1.movements);

// const createUsernames=function(accs)
// {
//     accs.forEach(function(acc){


//    acc.username=acc.owner.
//     toLowerCase().
//     split(' ').
// map(name=>name[0]
// ).join('');
// })
// }
// createUsernames(accounts);
// console.log(accounts);

// // console.log(createUsernames='Steven Thomas Williams');


// const deposits=movements.filter(function(mov)
// {
//     return mov>0;
// });

// console.log(movements);
// console.log(deposits);
// */


// const depositsFor=[];
// for(const mov of movements) if(mov>0)
// depositsFor.push(mov);

// console.log(depositsFor);

// console.log(depositsFor);

// const withdrawls=movements.filter(mov=>mov<0);
// console.log(withdrawls);



// console.log(movements);
// //ACUMULATOR IS LIKE SNOW BALL
// const balance=movements.reduce(function(acc, cur,
//      i, arr)
//      {
//         console.log(`Iteration ${i}: ${acc}`);

//        return acc+cur;
//      }, 0);
//      console.log(balance);


const eurToUsd=1.1;
console.log(movements);

///PIPELINE

const totalDepositesUSD=movements
.filter( mov => mov < 0  )
.map((mov,i,arr) => { return mov * eurToUsd; })
.reduce((acc, mov) => acc + mov , 0 );

console.log(totalDepositesUSD);