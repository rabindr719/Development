const averageCalculate=(a,b,c) =>(a+b+c)/3;
console.log(averageCalculate(3,4,5));

const scoreDolphins=averageCalculate(44,23,71);
const scoreKoalas=averageCalculate(65,54,49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner= function(avgDolphins, avgKoalas)
{
    if(avgDolphins>=2*avgKoalas)
    {
        console.log(`Dolphins winner of Trophy ${avgKoalas} vs ${avgDolphins} `);
    }else if(avgKoalas>=2*avgDolphins)
    {
        console.log(`Koalas is Winner of Trophy ${avgKoalas} vs ${avgDolphins}`)
    }else
    {
        console.log(`No One Wins The Trophy : `)
    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

scoreDolphins=averageCalculate(85,54,41);
scoreKoalas =averageCalculate(23,34,27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

// const x=prompt('Enter the Key value');
// console.log(x);