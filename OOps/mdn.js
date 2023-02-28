const parent ={
    value:2,
    method() {
        return this.value +1;
    },
};
//
console.log("------MDN------")
console.log(parent.method()); //3

const child ={
    __proto__:parent,

};
console.log(child.method()); //3

child.value=4;
console.log(child.method());

console.log("Geek for Geeks");

function Employee(name, age, gender, id)
{
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.id=id;

}

function Developer(name, age, gender, id, specialization)
{
    Employee.call(this, name, age, gender , id);
    this.specialization=specialization;

}
console.log(Employee.prototype);
console.log(Developer.prototype);

let Employee1=new Employee("Rabindra", 22,"Male","Aadhar")
let Developer1=new Developer("Arjun", 21,"Male","Aadhar", "FrontEnd Developer")

console.log(Employee1);
console.log(Developer1);

// console.log(Employee1 instanceof Developer1);


//MDN Documentation
class PersonP{
    constructor(name){
        this.name=name;
    }

    introduce(){
        console.log(`Hello , My name is Rabindra Kumar Sharma`);
    }
}

const otto1=new PersonP();
// const otto1=new PersonP("Otto");
otto1.introduce();


