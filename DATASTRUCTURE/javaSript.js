
let f=prompt('Enter the Value');
console.log(f);

const Resturant={
    name: 'Classic PiZZa Store',
    locations:['Bandra','Dogri', 'Siwan','Gopalganj'],
    categories : ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    startMenu : ['Focaccia', 'Bruschhete', 'KingStone','Melbourne'],
    mainMenu:['Pizza', 'Pasta', 'Risott', 'King'],
    order : function(starterIndex, mainIndex)
    {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];

    },
};
const arr=[2,3,4];
const a=arr[0];
const b=arr[1];
const c=arr[2];

const[x,y,z]=arr;
console.log(x,y,z);
console.log(arr);

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