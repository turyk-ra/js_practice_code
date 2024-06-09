// Write a function factorial() that takes a number as an argument and returns the factorial of the number.

// Example:

// factorial(6); 
// // returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 

// Assume only positive numbers will be given as an argument for the factorial() function.

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
  console.log(factorial(6));