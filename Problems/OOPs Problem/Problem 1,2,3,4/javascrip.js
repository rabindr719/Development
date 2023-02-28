console.log("---Challenge 1---");
console.log(" ");
const Car=function(make , speed)
{
    this.make=make;
    this.speed=speed;
};

Car.prototype.accelerate=function(){
    this.speed+=10;
    console.log(`${this.make} is going at ${this.speed} km/h`);

};

Car.prototype.brake= function()
{
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);

}

const bmw=new Car('BMW', 120);
const mercedes =new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

console.log(" ");
console.log(" ");


//Here Problem 2 is Implemented
console.log("---Challenge 2---");

console.log(" ");

class CarCl{
    constructor(make, speed)
    {
        this.make=make;
        this.speed=speed;
    }

    accelerate(){
        this.speed+=10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    brake(){
        this.speed-=5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }

    get speedUS()
    {
        return this.speed/1.6;
    }
    set speedUS(speed)
    {
        this.speed =speed*1.6;
    }
}

const ford =new CarCl('ford', 120);
console.log(ford.speedUS);

ford.accelerate(); 
ford.accelerate();
ford.brake();
ford.speedUS=50;
console.log(ford);
console.log(" ");
console.log(" ");






console.log("---Challenge 3---");
console.log(" ");

const Car3=function(make , speed)
{
    this.make=make;
    this.speed=speed;
};

Car3.prototype.accelerate=function(){
    this.speed+=10;
    console.log(`${this.make} is going at ${this.speed} km/h`);

};

Car3.prototype.brake= function()
{
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);

}

const EV=function(make, speed, charge)
{
    Car3.call(this, make, speed)
    this.charge=charge;
};

EV.prototype= Object.create(Car3.prototype);

EV.prototype.chargeBattery=function(chargeTo)
{
    this.charge=chargeTo;
};

EV.prototype.accelerate=function(){
    this.speed+=20;
    this.charge--;

    console.log(`${this.make} is Going at ${this.speed} km/h with a charge of ${this.charge}`)
}
const tesla=new EV('Tesla', 120,23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();


console.log("");
console.log("---Challenge 4---");
console.log("");

class EVCl extends CarCl{

    #charge;
    constructor(make, speed, charge)
    {
        super(make, speed);
        this.#charge=charge;
    };

    chargeBattery(chargeTo){
        this.#charge=chargeTo;
        return this;
    }
  
        accelerate(){
            this.speed+=20;
            this.#charge--;
            console.log(`${this.make} is going at ${this.speed} km/h , 
            with a charge of ${
                this.#charge
            }`
        );
            return this;
     }
}

const rivian =new EVCl('Rivian', 120,23);
console.log(rivian);

rivian
    .accelerate()
    .accelerate()
    .accelerate()
    .brake()
    .chargeBattery()
    .accelerate();

    console.log(rivian.speedUS);
