const rest = new Map();

rest.set('name','Classico Italiano');
rest.set(1,'FIRENCE , ITALY')
console.log(rest.set(2, 'Lisbon', Portogal));

rest.set('categories', ['Italian','Pizzeria',
'Vegetarian','Organic'])
.set('open',11)
.set('close',23)
.set(true, 'We are open :D')
.set(false, 'We are closed : (');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time =8;
console.log(rest.get(time> rest.get('open') && time
<rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr=[1,2];
rest.set(arr,'Test');
rest.set(document.querySelector('h1'),'Heading');
console.log(rest);
console.log(rest.size);

// rest.set([1,2], 'Test');
console.log(rest.get(arr));
 


// LECTURE 117

const Question =new Map([
    ['Question',' What is th  best programmming language in the word?'],
    [1, 'JAVA'],
    [2, 'C'],
    [3, 'JavaScript'],
    ['Correct', 3],
    [true, 'Correct'],
    [false, 'TRY AGAIN']

]);
console.log(Question);

//Convert object to MAP

console.log(Object.entries(openingHours));
const hoursMap=new Map(Object.entries(openingHours));
console.log(hoursMap);


//Quiz Application


console.log(Question.get('Question'));
for(const [key, value] of Question)
{
    if(typeof key =='number') console.log(`Answer ${key} : ${value}`);
}
const answer =Number(Prompt('Your Answer'));
console.log(answer);

console.log(Question.get(Question.get('Correct')===answer));

//Convert Map to Array

console.log([...Question]);

//Console log Question entries();

console.log(Question.entries());
console.log([...Question.values()]);
