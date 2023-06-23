// You’ll need two arrays of “friends” from two mock users so that you can extract the names of 
// the followers who exist in both lists. Make a variable called bobsFollowers and set it equal to an array 
// with four strings representing the names of Bob’s friends.
let bobsFollowers = ['Ed', 'Zak', 'Fred', 'John'];
// Make a variable called tinasFollowers and set it equal to an array with three strings representing 
// the names of Tina’s friends. Make exactly two of these the same as two of the friends in the bobsFollowers array.
let tinasFollowers = ['Fred', 'Paik', 'Zak'];
// Create a third variable named mutualFollowers and set it to an empty array.
let mutualFollowers = [];
// Create a nested loop that iterates through bobsFollowers as the array for the outer loop and tinasFollowers 
// as the array for the inner loop. If the current element from the outer loop is the same 
// as the current element from the inner loop, push that element into the mutualFollowers array
for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}
console.log(mutualFollowers);