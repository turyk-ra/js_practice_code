// Write your function here:
function lifePhase(age) {
    if (age < 0 || age > 140) {
        return 'This is not a valid age';
    } else if (0 <= age && age <= 3) {
        return 'baby';
    } else if (4 <= age && age <= 12) {
        return 'child';
    } else if (13 <= age && age <= 19) {
        return 'teen';
    } else if (20 <= age && age <= 64) {
        return 'adult';
    } else {
        return 'senior citizen';
    }
}
// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(5)) //should print 'child'

// We encourage you to add more function calls of your own to test your code!
console.log(lifePhase(-1));
console.log(lifePhase(146));
console.log(lifePhase(15));
console.log(lifePhase(64));
console.log(lifePhase(88));
console.log(lifePhase(2));