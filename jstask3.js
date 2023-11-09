// Function to get user input
function getUserInput(message) {
    return parseFloat(prompt(message));
}

// Function to calculate multiplication
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

// Function to calculate division
function divideNumbers(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "Cannot divide by zero";
    }
}

// Get user input for two numbers
const number1 = getUserInput("Enter the first number:");
const number2 = getUserInput("Enter the second number:");

// Calculate and display multiplication
const multiplicationResult = multiplyNumbers(number1, number2);
console.log(`Multiplication result: ${multiplicationResult}`);

// Calculate and display division
const divisionResult = divideNumbers(number1, number2);
console.log(`Division result: ${divisionResult}`);