const scoreDolphins=(96+108+89)/3;
const scoreKoalas=(88+91+110)/3;
console.log(scoreDolphins);
console.log(scoreKoalas);
// console.log(prompt('Enter the Value'));
if(scoreDolphins>scoreKoalas)
{
    console.log(`Team Koalas ${scoreKoalas } is Winner`);
}else if(scoreKoalas>scoreDolphins){
    console.log(`Team Dolphins ${scoreDolphins} is Winner`);
}else if(scoreDolphins===scoreKoalas)
{
    console.log("Score are Level and Match is Draw")
}

// This is For BONUS 1

const scoreDolphinsBonus1=(97+112+101)/3;
const scoreKoalasBonus1=(109+95+123)/3;
if(scoreDolphinsBonus1>scoreKoalasBonus1 && scoreDolphinsBonus1>=100) 
{
    console.log(`Team Koalas ${scoreKoalasBonus1 } is Winner`);
}else if(scoreKoalasBonus1>scoreDolphinsBonus1 && scoreKoalasBonus1>=100){
    console.log(`Team Dolphins ${scoreDolphinsBonus1} is Winner`);
}else if(scoreDolphinsBonus1===scoreKoalasBonus1)
{
    console.log("Score are Level and Match is Draw")
}

// This is For BONUS 2
const scoreDolphinsBonus2=(97+112+101)/3;
const scoreKoalasBonus2=(109+95+106)/3;
if(scoreDolphinsBonus2>scoreKoalasBonus2 && scoreDolphinsBonus2>=100) 
{
    console.log(`Team Koalas ${scoreKoalasBonus2 } is Winner`);
}else if(scoreKoalasBonus2>scoreDolphinsBonus2 && scoreKoalasBonus2>=100){
    console.log(`Team Dolphins ${scoreDolphinsBonus2} is Winner`);
}else if(scoreDolphinsBonus2===scoreKoalasBonus2 && scoreDolphinsBonus2>=100 && scoreKoalasBonus2>=100)
{
    console.log("Score are Level and Match is Draw")
}else{
    console.log("No one Wins The Trophy : ");
}