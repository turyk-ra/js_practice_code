// 1.
// Replace the word method in the first method call with a method that will do something to each of the values in the array and return undefined.

// Checkpoint 2 Passed
// 2.
// In the second method call, replace the word method with a method that will return a new array with only those elements longer than 7 characters.

// Checkpoint 3 Passed
// 3.
// In the third method call, replace the word method with a method that accepts an array containing multiple values and returns a single value.

// Checkpoint 4 Passed
// 4.
// In the fourth method call, replace the word method with a method that will return a new array of numbers returned from the function.

// Checkpoint 5 Passed
// 5.
// In the fifth method call, replace the word method with a method that will return a boolean value.

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);
console.log(longCities);
// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);