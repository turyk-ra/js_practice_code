// 1.
// Write a function, dogFactory(). It should:

// have 3 parameters: name, breed, and weight (in that order)
// expect name and breed to be strings
// expect weight to be a number
// return an object
// have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in
// dogFactory('Joe', 'Pug', 27)
// // Should return { name: 'Joe', breed: 'Pug', weight: 27 }

// Checkpoint 2 Step instruction is unavailable until previous steps are completed
// 2.
// Add getters and setters for each of the three properties and change the property names to have an underscore prepended.

// Checkpoint 3 Step instruction is unavailable until previous steps are completed
// 3.
// Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1.


const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name() {
            if (typeof this._name === 'string') {
                return this._name;
            }
        },
        get breed() {
            if (typeof this._breed === 'string') {
                return this._breed;
            }
        },
        get weight() {
            if (typeof this._weight === 'number') {
                return this._weight;
            }
        },
        set name(name) {
            this._name = name;
        },
        set breed(breed) {
            this._breed = breed;
        },
        set weight(weight) {
            this._weight = weight;
        },
        bark() {
            return 'ruff! ruff!';
        },
        eatTooManyTreats() {
            this._weight++;
        }
    }
}

let joe = dogFactory('Joe', 'Pug', 27);
console.log(joe);

console.log(joe.bark());
console.log(joe._weight);
joe.eatTooManyTreats();
console.log(joe._weight);