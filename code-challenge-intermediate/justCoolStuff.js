// 1.
// Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

// let arr1 = ['this', 'not this', 'nor this'];
// let arr2 = ['thing 1', 'thing 2', 'this'];

// justCoolStuff(arr1, arr2); // Should return ['this']

// You can test your function when you’re ready by passing in the myStuff and coolStuff arrays or by making arrays of your own!

// Write your code here:
const justCoolStuff = (array1, array2) => {
    newArr = [];
    array1.filter(word =>{
        array2.filter(word2 => {
            if(word === word2){
                newArr.push(word);
            }
        })
    })
    return newArr;
}





// Feel free to uncomment the code below to test your function

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

