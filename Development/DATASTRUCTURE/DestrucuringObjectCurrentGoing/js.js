const{name,openingHours, categories}=resturent;
console.log(name1, operingHours, categories);

const{name:resturentName, openingHours:hours,
categories:tags}=resturent;
console.log(resturentName,hours, tags); 
const{menu=[], starterMenu: starters=[]}=resturent;
console.log(menu, starters);  


let a=111;
let b=999;
const obj={a:23, b:7,c:14};

({a,b}=obj);
console.log(a,b);

const{fri: { open:o, close:c},
}=openingHours;
console.log(o,c);

