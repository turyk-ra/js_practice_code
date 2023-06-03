//temperature in kelvin
const kelvin = 293;
//log kelvin temperature
console.log(`The temperature is ${kelvin} degrees Kelvin.`)
//temperature in celsius
let celcius = kelvin - 273;
//log celcius temperatue
console.log(`The temperature is ${celcius} degrees Celcius.`)
//convert and round temperature in fahrenheit from celsius
let fahrenheit = Math.floor(celcius * (9/5) + 32);
//log the F temerature
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
//convert and round celcius to the Newton
let newton = Math.floor(celcius * (33/100));
//log newton temperature
console.log(`The temperature is ${newton} degrees Newton.`)