let Car= function(make, speed){
    this.make=make;
    this.speed=speed;
};
Car.prototype.acelerate=function()
{
    this.speed +=60;
    console.log(`The Speed of ${this.make} is Increase by ${this.speed} km/h
     `);
}

Car.prototype.brake=function(){
    this.speed -=40;
    console.log(`The Speed of ${this.make} is Decrease by ${this.speed} km/h
     `);

}

const bmwcar=new Car('BMW Car', 220);
const mercedes=new Car('Mercedes', 90);


bmwcar.acelerate();
bmwcar.acelerate();
bmwcar.acelerate();

bmwcar.brake();
bmwcar.brake();
bmwcar.brake();


