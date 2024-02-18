const prompt = require('prompt-sync')();

// Function to calculate factorial
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * calculateFactorial(number - 1);
    }
}

// Get user input using prompt-sync
let userInput = prompt("Enter a number to calculate its factorial: ");
let userNumber = parseInt(userInput);

// Check if the input is a valid number
if (!isNaN(userNumber)) {
    // Calculate and display the factorial
    const factorial = calculateFactorial(userNumber);
    console.log(`The factorial of ${userNumber} is: ${factorial}`);
} else {
    console.log("Invalid input. Please enter a valid number.");
}
