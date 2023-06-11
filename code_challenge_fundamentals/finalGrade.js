// Write your function here:
function finalGrade(num1, num2, num3) {
    if (num1 < 0 || num2 < 0 || num3 < 0 || num1 > 100 || num2 > 100 || num3 > 100) {
        return 'You have entered an invalid grade.';
    }
    const avg = (num1 + num2 + num3) / 3;
    if (avg >= 0 && avg <= 59) {
        return 'F';
    } else if (avg >= 60 && avg <= 69) {
        return 'D';
    } else if (avg >= 70 && avg <= 79) {
        return 'C';
    } else if (avg >= 80 && avg <= 89) {
        return 'B'
    } else {
        return 'A';
    }
}
// Uncomment the line below when you're ready to try out your function
// We encourage you to add more function calls of your own to test your code!
console.log(finalGrade(99, 92, 95)) // Should print 'A'
console.log(finalGrade(-1, 140, 95))
console.log(finalGrade(1, 1, 1))
console.log(finalGrade(60, 60, 69))
console.log(finalGrade(79, 79, 76))
console.log(finalGrade(80, 82, 86))
