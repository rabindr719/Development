
const game =
{ team1: 'FC Pune',
    team2: 'Bengaluru',
    players:
    [
        [
          'ROHIT_SHARMA',  
          'SHUBHAM_GILL',
          'CHATESWAR',
          'VIRAT_KOHLI',
          'ISHAN_KISHAN',
          'KL_RAHUL',
          'HARDIK_PANYA',
          'RAVINDRA_JADEJA',
          'MOHAMMAD_SIRAJ',
          'RAVI_ASHWIN',
          'UMESH_YADAV'
        ],        
   
        [
          'DAVID_WARNER',
          'USMAN_KHWAJA',
          'MARNUS_LBAUSANGE',
          'STEVE_SMITH',
          'TRAVIS_HEAD',
          'PETER_HANSCOMB',
          'ALEX_CAREY',
          'PAT_CUMMINS',
          'MITCHEL_STARC',
          'NATHAN_LYON',
          'MITCHELL_SWEPON'

        ],
    ],
    score:'4:0',
    scored :['UMESH_YADAV','RAVI_ASHWIN','AB_de_VILLIERS','MARNUS_LBAUSANGE'],
    date:'Feb 9 2023',
    odds: 
    {
        team1:1.33,
        x:3.25,
        team2:6.5,
    },

};

const [players1, players2]=game.players;
console.log(players1, players2);

const [wk, kepeer]=players1;
console.log(wk, kepeer);

const allPlayers=[...players1, ...players2];
console.log(allPlayers);


const players1Final=[...players1, 'MS_DHONI', 'KING', 'SEHWAG'];

const {odds: {team1, x: draw, team2}}=game;

console.log(team1, draw, team2);
const printGoals  = function(...players)
{
    console.log(players);
    console.log(`${players.length} match which wins `);
};
printGoals('UMESH','ASHWIN', 'LABUSANGE','UMESH');
printGoals('DHONI','KING');


printGoals(game.scored);


team1<team2 && console.log('Team 1 More Likely to WIn');




for(const [i, player] of game.scored.entries())


     console.log(`Goal ${i + 1} : ${player}`);

     const odds =Object.values(game.odds);

        let average=0;
        for(const odd of Object.values(game.odds))
        {
            console.log(average);
            average += odd;
        }

        average/=odds.length;
        console.log(average);


        for(const [team, odd]of Object.entries(game.odds))
        {
            const teamStr=team==='x'? 'draw' : `victory ${game[team]}`
            console.log(team, odd);
        }