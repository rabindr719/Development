//tHIS IS A APPLICATION WHICH IS BASED ON LOTS OF BETTING OF GOAL OR SPORTS


const gameEvents =new Map([
    [17,' GOAL'],
    [36,'SUBSTITUTION'],
    [47,'GOAL'],
    [61, 'SUBSTITUTION'],
    [64,'Yello CARD'],
    [69,'Red Card'],
    [70, 'SUSBSTITUTION'],
    [72, 'SUBSiTITUTION'],
    [76,'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow Card'],

]);

const events =[...new Set(gameEvents.values())];
console.log(events);
//2.
gameEvents.delete(64);
console.log(`An events happedned , on avaerage , every ${90/gameEvents.size} minuts`);
const time=[...gameEvents.keys()].pop();
console.log(time);
console.log(
    `An events happedned , on average , every ${time/gameEvents.size}`
);

for(const [min, event] of gameEvents){
    const half =min<=45? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}

