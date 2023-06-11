const currentYear = 2023;
// Write your function here:
const howOld = (age, year) => {
    let bornYear = currentYear - age;
    if (year > currentYear) {
        return `You will be ${year - bornYear} in the year ${year}`
    } else if (year < bornYear) {
        return `The year ${year} was ${bornYear - year} years before you were born`
    } else if (year < currentYear && year > bornYear) {
        return `You were ${year - bornYear} in the year ${year}`
    }
}
// Once your function is written, write function calls to test your code!
console.log(howOld(30, 2048));
console.log(howOld(30, 1945));
console.log(howOld(30, 2010));