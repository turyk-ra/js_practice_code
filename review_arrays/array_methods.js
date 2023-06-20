// The .concat() array method merges, or concatenates, two or more arrays.
const grocery1 = ['blueberries', 'eggs', 'artichoke'];
const grocery2 = ['milk', 'cookies'];
const grocery = grocery1.concat(grocery2);
console.log(grocery);

// The .filter() array method creates a new array with all elements that pass the test from the provided function.
const charactersNames = ['Bilbo', 'Legolas', 'Boromir', 'Aragorn', 'Balin', 'Baggins'];
const bnamesArray = charactersNames.filter(name => name.toLowerCase().startsWith('b'));
console.log(bnamesArray);

// The .find() method returns the first element in the array that satisfies the given function.
const numbers = [1, 2, 3, 4, 5, 6, 7, 50, 70, 60];
console.log(numbers.find(number => number > 50));

// The .findIndex() array method returns the first index that passes the callback function’s test. 
// Returns -1 if no element passes the test.
const dogs = ['sam', 'bim', 'shakle', 'franky', 'ceasar', 'well', 'summerwidth'];
console.log(dogs.findIndex(dog => dog.length < 6));

// The .forEach() array method loops over the array, passing each item in the array into the callback function provided.
const numbersSec = [1, 2, 3, 4, 5, 6, 7, 50, 70, 60];
let sum = 0;
numbersSec.forEach(number => sum += number)
console.log(sum);

// The .includes() method returns true if a given value is included in an array. Otherwise, it returns false.
const dogsSec = ['sam', 'bim', 'shakle', 'franky', 'ceasar', 'well', 'summerwidth'];
console.log(dogsSec.includes('shakle'));

// The .join() method returns a string representation of array elements concatenated together.
const charactersNames2 = ['Bilbo', 'Legolas', 'Boromir', 'Aragorn', 'Balin', 'Baggins'];
const joinString = charactersNames2.join();
console.log(joinString);

// The .map() method creates a new array with the results of calling a function for every element in array.
const nums = [1, 2, 3, 4, 5, 6];
const double_nums = nums.map(num => Math.pow(num, 2));
console.log(double_nums);

// The .reduce() method combines each element of an array, using a specified reducer function, and returns a single value.
const arrayOne = ['a', 'b', 'c', 'd', 'e'];
console.log('Adding strings:', arrayOne.reduce((acc, curr) => acc + curr));

// The reverse() method does not take any parameters.
const numberss = [5, 2, 9];
console.log(numberss.reverse());

// The .sort() method returns an array with its items sorted in place.
const letters = ['d', 'b', 'e', 'a', 'c'];
console.log('Letters: ', letters.sort());

// The .toString() returns a string with each of the array values, separated by commas. Does not mutate the original array.
let fruits = ['Apple','Blueberries','Banana','Lemon','Mango','Orange','Grapes','Pineapple'];
let fruitsString = fruits.toString();
console.log(fruitsString);