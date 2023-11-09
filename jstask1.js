function reverseNumber(x) {
    // Convert the number to a string, split it into an array of digits, reverse the array, and join it back into a string
    const reversedString = x.toString().split('').reverse().join('');
    
    // Convert the reversed string back to a number
    const reversedNumber = parseInt(reversedString, 10);

    return reversedNumber;
}

// Example usage:
const x = 32243;
const reversed = reverseNumber(x);
console.log("Original Number:", x);
console.log("Reversed Number:", reversed);