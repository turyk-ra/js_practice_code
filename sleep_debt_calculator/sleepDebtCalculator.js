//create a function that determine how many hours of sleep do you got each night of the week
const getSleepHours = day => {
    //variable for hours
    let sleepingHours = 0;
    //every day result of hours
    switch (day) {
        case 'monday':
            sleepingHours += 8;
            break;
        case 'tuesday':
            sleepingHours += 7;
            break;
        case 'wednesday':
            sleepingHours += 7;
            break;
        case 'thursday':
            sleepingHours += 6;
            break;
        case 'friday':
            sleepingHours += 4;
            break;
        case 'saturday':
            sleepingHours += 8;
            break;
        case 'sunday':
            sleepingHours += 8;
            break;
    }
    return sleepingHours;
};
//create a function to get total sleep hours with implicit return
const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('tuesday') + getSleepHours('wednesday')
    + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
//create a function to get total ideal hours of sleeping per week
const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
};
//create a function to calculate sleep debt
const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log(`the user sleep ${actualSleepHours} this week, ideal hours - ${idealSleepHours}`);
        console.log('the user got the perfect amount of sleep.');
        console.log(`${actualSleepHours} = ${idealSleepHours}`)
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`the user sleep ${actualSleepHours} this week, ideal hours - ${idealSleepHours}`);
        console.log('the user got more sleep than needed.');
        console.log(`the user sleep more for ${actualSleepHours - idealSleepHours} hours`);
    } else {
        console.log(`the user sleep ${actualSleepHours} this week, ideal hours - ${idealSleepHours}`);
        console.log('the user should get some rest.');
        console.log(`the user don't sleep ${idealSleepHours - actualSleepHours} hours for ideal result`);
    }
};
//start program
calculateSleepDebt();