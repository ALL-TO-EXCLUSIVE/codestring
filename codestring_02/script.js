//i've added the comments for the understading, and yeah its written by me(dev patel)

// Get the display element from the HTML document
const display = document.getElementById('display');

/**
 * Clears the entire display.
 * Example: If the display shows '12345', calling clearDisplay() will make it empty.
 */
function clearDisplay() {
    display.innerText = ''; // Set the display text to an empty string
}

/**
 * Deletes the last character from the display.
 * Example: If the display shows '12345', calling deleteLast() will make it '1234'.
 */
function deleteLast() {
    display.innerText = display.innerText.slice(0, -1); // Remove the last character from the display text
}

/**
 * Appends a number to the display.
 * Example: If the display shows '123', calling appendNumber('4') will make it '1234'.
 */
function appendNumber(number) {
    display.innerText += number; // Add the number to the end of the current display text
}

/**
 * Appends an operator to the display, ensuring no consecutive operators are added.
 * Example: If the display shows '123+', calling appendOperator('*') will change it to '123*'.
 * If the display shows '123', calling appendOperator('+') will make it '123+'.
 */
function appendOperator(operator) {
    const lastChar = display.innerText.slice(-1); // Get the last character of the current display text
    // Check if the last character is an operator
    if (['+', '-', '*', '/'].includes(lastChar)) {
        // If it is, replace it with the new operator
        display.innerText = display.innerText.slice(0, -1);
    }
    display.innerText += operator; // Add the operator to the end of the current display text
}

/**
 * Evaluates the arithmetic expression shown on the display and updates the display with the result.
 * Example: If the display shows '3+4*2', calling calculateResult() will change it to '11'.
 * If the expression is invalid, it will display 'Error'.
 */
function calculateResult() {
    try {
        // Evaluate the expression using eval and update the display with the result
        display.innerText = eval(display.innerText);
    } catch {
        // If there's an error (e.g., invalid expression), display 'Error'
        display.innerText = 'Error';
    }
}
