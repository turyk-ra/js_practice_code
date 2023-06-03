//temperature in kelvin
const kelvin = 293;
//temperature in celsius
let celcius = kelvin - 273;
//convert and round temperature in fahrenheit from celsius
let fahrenheit = Math.floor(celcius * (9/5) + 32);
//log the F temerature
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
//done
