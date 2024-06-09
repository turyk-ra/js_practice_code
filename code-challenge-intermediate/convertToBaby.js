// Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

// Note: You may have noticed how convenient it would be to use map, but you’re not allowed to use it here.

// Write your code here:
const convertToBaby = array =>{
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        newArray.push('baby ' + array[index]);
    }
    return newArray;
}







// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 

