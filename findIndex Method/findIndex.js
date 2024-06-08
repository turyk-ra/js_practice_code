// 1.
// Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.

// Checkpoint 2 Step instruction is unavailable until previous steps are completed
// 2.
// Let’s see if we can find the index of the first animal that starts with the letter 's'.

// Call .findIndex() on the animals array and return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
    return animal === 'elephant';
})

console.log(foundAnimal);

const startsWithS = animals.findIndex(animal => {
    return animal.startsWith('s');
})

console.log(startsWithS);
