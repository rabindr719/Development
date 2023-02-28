"use strict"

/*
const Person =function (firstName, birthYear)
{
    this.firstName=firstName;
    this.birthYear=birthYear;
};

Person.prototype.calAge= function()
{
    console.log(2037-this.birthYear);
}

const Student=function(firstName, birthYear, course){

      // this.firstName=firstName;
    // this.birthYear=birthYear;

    //insted this

    Person.call(this, firstName, birthYear);
  
    this.course=course;

}
Student.prototype.introduce=function(){
    console.log(`My name is ${this.firstName} and I study ${this.course} till  ${2023}`);
};

const mike =new Student ('Rabindra', 2023, 'Computer Science');
mike.introduce();

//mike.calcAge();

class StudentCl extends Person{
    constructor(fullName, birthYear, course)
    {
        //Always need to happens first
        super(fullName, birthYear);
        this.course = course;
    }
    introduce()
    {
        console.log(`My name is ${this.fullName} and I study in ${this.course}`);

    }
    calcAge(){
        console.log(
            `I am ${2037- this.birthYear} years Old , but as a Student I feel more like ${2037-this.birthYear+10}`
        );
    }
}

const Smitha =new StudentCl('Steven Smith', 2009,'Australian National Cricket team');
Smitha.introduce();
Smitha.introduce();
Smitha.calAge();

//Inheritance Between Claases

const PersonProto ={
    calcAge(){
        console.log(2037-this.birthYear);

    },

    init(firstName, birthYear)
    {
            this.firstName=firstName;
            this.birthYear=birthYear;
    },

};

const steven =Object.create(PersonProto);

const StudentProto =Object.create(PersonProto);

StudentProto.init=function(firstName, birthYear, course)
{
    this.course=course;
};

StudentProto.introduce()
{
    console.log(`My name is ${this.fullName} and I study in ${this.course}`);

}

const jay =Object.create(StudentProto);
jay.init('Jay', 2010,'Computer Science');
jay.introduce();
jay.calAge(); */

class Account{

    //Public fields
   locale = navigator.language;

    // Private Fields
   #movements=[];
  
    constructor(owner, currency, pin)
    {
        this.owner=owner;
        this.currency=currency;
    //Protected Property
        this._pin=pin;
        this.#movements=[];
        this.locale=navigator.language;

        console.log(`Thank for Opening a New Account, ${owner}`);
    }

    //public interface
    getMovements(){
        return this.#movements;
    }
    deposit(val)
    {
        this.#movements.push(val);
    }
    withdraw(val)
    {
        this.deposit(-val);
    }
// _ Use for Protected
    approveLoan(val)
    {
        return true;
    }

    requestLoan(val){
        if(this.approveLoan(val)){
            this.deposit(val)
            {
                console.log(`Loan Approved`);
            }
        }
    }

}

const acc1=new Account('Rabindra', 'INR', 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);
console.log(acc1);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);
console.log(acc1.getMovements());


console.log(acc1);
console.log(acc1.pin);

// accesss through # movements


//Entrire OverView of Javascript Classes


class Student{
    university ='University of Nalanda';
    #studyHours=0;
    #course;

    //Static method is used as Helper of Method
    static numSubject=10;

    constructor(fullName, birthYear, startYear, course){
        // super(fullName, birthYear);
        super.fullName;
        super.birthYear;


        this.startYear=startYear;
        this.#course=course;
    }

    introduce(){
        console.log(`I study ${this.#course} at ${this.university}`);

    }
    study(h){
        this.#makeCoffe();
        this.#studyHours+=h;
    }
    #makeCoffe(){
        return `Here is Coffe for You`;
    }

    get testScore(){
        return this._testScore;
    }

    set testScore(score){
        //Terniary Operator
        this._testScore=score<=28? score:0;
    }

    static printCurriculam(){
        console.log(`There are ${this.numSubject} subject`);

    }
}

const student=new Student('Rabindra', 2000, 2023, 'CyberSecurity');

console.log(student);