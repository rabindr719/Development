const Mark=
{
    fullname : 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function()
    {
        this.bmi=this.mass/this.heigth**2;
        return this.bmi;
    }
};
const john={
    fullname:'Steven Smith',
    mass: 92,
    heigth:1.95,
    calcBMI: function()
    {
        this.bmi=this.mass/this.heigth**2;
        return this.bmi;
    }
};
Mark.calcBMI();
john.calcBMI();
console.log(Mark.bmi, john.bmi);

if(Mark.bmi>john.bmi)
{
    console.log(`${Mark.fullname}'s BMI (${Mark.bmi}, is Higher Than ${john.bmi}`)
}else if(john.bmi>Mark.bmi)
{
    console.log(`${john.fullname} 's BMI (${john.bmi} is higher than
        ${Mark.fullname}'s BMI (${Mark.bmi})`);  
}
