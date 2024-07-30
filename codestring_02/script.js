const display = document.getElementById('display');



function clearDisplay() {
    display.innerText = '';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function appendNumber(number) {
    display.innerText += number;
}

//let me explain this
function appendOperator(operator) {

    //here i'm taking the last character from the display container
    const lastChar = display.innerText.slice(-1);

    //checking if the last character is any operator , if yes, then we'll override the whole expression
    //we are checking this , so that no one can insert the multiple operator between two operands
    if (['+', '-', '*', '/'].includes(lastChar)) {
        console.log(['+', '-', '*', '/'].includes(lastChar))
        display.innerText = display.innerText.slice(0, -1);
    }

    //otherwise we'll add the operator to the expression
    display.innerText += operator;
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}
