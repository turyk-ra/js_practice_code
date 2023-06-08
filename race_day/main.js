// define a variable that random a racer number
let raceNumber = Math.floor(Math.random() * 1000);
// define a variable that indicates early register or not
let registerEarly = true;
// define a variable that indicates runners age
let runnerAge = 20;
// control flow - checks age and reg time to determine race time + check raceNumber
if ( registerEarly && runnerAge > 18){
    raceNumber += 1000;
    console.log('Early adults run at 9:30 am');
}else if( !registerEarly && runnerAge > 18){
    console.log('Late adults run at 11:00 am');
}else if( runnerAge < 18){
    console.log('Youth registrants run at 12:30 pm (regardless of registration)');
}else{
    console.log('Watch the registration desk.');
}
console.log(`Your race number is ${raceNumber}`);