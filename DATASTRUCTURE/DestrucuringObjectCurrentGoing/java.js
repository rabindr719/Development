
// let v=prompt('Enter The Name');
// console.log(v);
const Resturant={
    name:'Classico Italino',
    location:'Via Angelo Tavanti 23',
    categories: ['Italino','Pizzerria','Vegeterian','Organic'],
    starterMenu:['Focaccia','Bruschetta','GarlicBread', 'Caprese Salad'],
    mainMenu:['Pizza', 'Pasta','Risto'],
    openingHours :{
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
        },
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
         }
    }
};
Resturant.orderDelivery({
    time:'22:30',
    address:'Via del Sole,21',
    mainIndex:2,
    starterIndex:2,
});

Resturant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex:1,
})

let [main, ,secondary]=Resturant.categories;
console.log(main, secondary);

[main, secondary]=[secondary,main];
console.log(main, secondary);

console.log(Resturant.order(2,0));

const [stater, mainCourse]=Resturant.order(2,0);
console.log(stater,mainCourse);

const nested=[2,4[5,6]];
// const[i, ,j]=nested;
// console.log(i, j);

const[i, ,[j,k]]=nested;
console.log(i, j, k);

// Default Value
const [p=1,q=2,r=1]=[8,9];
console.log(p,q,r);




const{name,openingHours, categories}=Resturant;
console.log(name1, openingHours, categories);

const{name:resturentName, openingHours:hours,
categories:tags}=Resturant;
console.log(resturentName,hours, tags); 
const{menu=[], starterMenu: starters=[]}=Resturant;
console.log(menu, starters);  


let a=111;
let b=999;
const obj={a:23, b:7,c:14};

({a,b}=obj);
console.log(a,b);
  

const{fri: { open:o, close:c},
}=openingHours;
console.log(o,c);