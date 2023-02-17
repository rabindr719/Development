//This is The SET DATA STRUCTUTRE USING JAVASCRIPT
const orderSet=new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza'

]);


//DATA STRUCTURE IMPLEMENTATIONS 


console.log(orderSet);
console.log(new Set('Jonas'));
console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Rice"));
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
console.log(orderSet);

for(const order of orderSet) console.log(order);

const staff=['Waiter', 'Chef', 
'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique=[...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef','Waiter', 'Manager',
'Chef', 'Waiter']).size
);
console.log(new Set('jonasschmedtmann').size);