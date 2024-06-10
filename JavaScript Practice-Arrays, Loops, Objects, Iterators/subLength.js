// Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.


const subLength = (str, char) => {
    let charCount = 0;
    let len = -1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            charCount++;
            if (charCount > 2) {
                return 0;
            }
            if (len === -1) {
                len = i;
            } else {
                len = i - len + 1;
            }
        }
    }

    if (charCount < 2) {
        return 0; 
    }

    return len;
};

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0