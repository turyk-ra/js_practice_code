// Write your function here:
const calculateWeight = (earthWeight, planet) => {
    let weight = 0;
    switch (planet) {
        case 'Mercury':
            weight = earthWeight * 0.378;
            break;
        case 'Venus':
            weight = earthWeight * 0.907;
            break;
        case 'Mars':
            weight = earthWeight * 0.377;
            break;
        case 'Jupiter':
            weight = earthWeight * 2.36;
            break;
        case 'Saturn':
            weight = earthWeight * 0.916;
            break;
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }
    return weight;
}
// Uncomment the line below when you're ready to try out your function
console.log(calculateWeight(100, 'Jupiter')) // Should print 236
