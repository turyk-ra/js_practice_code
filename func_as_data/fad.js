// 1.
// We’ve defined a function with a very long name: checkThatTwoPlusTwoEqualsFourAMillionTimes(). This function takes a long time to execute. It checks whether 2 + 2 = 4, but it does it a million times (just to be really sure)!

// Using const, declare a shorter-named variable, isTwoPlusTwo that will be easier to work with. Assign checkThatTwoPlusTwoEqualsFourAMillionTimes as its value.

// Checkpoint 2 Passed
// 2.
// Invoke your isTwoPlusTwo() function.

// Checkpoint 3 Passed
// 3.
// Hmmm, if we forgot the original name of our function. Is there a way we could figure it out?

// Use isTwoPlusTwo to console.log() the name property of the function we assigned to isTwoPlusTwo.


const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for (let i = 1; i <= 1000000; i++) {
        if ((2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
};

// Write your code below
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();
console.log(isTwoPlusTwo.name);