// Write your function here:
const tipCalculator = (quality, total) => {
    let percent = 0;
    switch (quality) {
        case 'bad':
            percent = 5;
            break;
        case 'ok':
            percent = 15;
            break;
        case 'good':
            percent = 20;
            break;
        case 'excellent':
            percent = 30;
            break;
        default:
            percent = 18;
            break;
    }
    return total * (percent / 100);
}
// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)) //should return 20
// We encourage you to add more function calls of your own to test your code!
console.log(tipCalculator('bad', 100))
console.log(tipCalculator('ok', 100))
console.log(tipCalculator('excellent', 100))
console.log(tipCalculator('not bad', 100))
