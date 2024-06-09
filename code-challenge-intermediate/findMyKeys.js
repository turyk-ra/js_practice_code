// 1.
// Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'. If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return -1.

// const drawer = ['rubber bands', 'tape', 'old menus', 'batteries'];
// findMyKeys(drawer);
// // Should return -1

// You can use any technique you want to accomplish this task. Though, if you look, there’s a built-in method that will make pretty quick work of it.

// You can test your function when you’re ready by passing in the randomStuff array or by making your own array!


// Write your code here:

const findMyKeys = array => array.findIndex(element => element === 'keys');

// Feel free to comment out the code below to test your function

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
const randomStuff2 = ['credit card', 'screwdriver', 'receipt', 'gum', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
console.log(findMyKeys(randomStuff2))
// Should print 4
