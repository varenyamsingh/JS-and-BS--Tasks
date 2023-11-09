function sortStringAlphabetically(str) {
    // Convert the string to an array of characters, sort the array, and join it back into a string
    const sortedString = str.split('').sort().join('');
    
    return sortedString;
}

// Example usage:
const inputString = 'webmaster';
const sortedOutput = sortStringAlphabetically(inputString);
console.log("Original String:", inputString);
console.log("Sorted String:", sortedOutput);