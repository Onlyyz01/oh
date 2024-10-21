// Variables for storing current input and calculation
let currentInput = '';
let result = '';

// Append value to input
function appendValue(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

// Clear entire input
function clearAll() {
    currentInput = '';
    result = '';
    document.getElementById('display').value = '';
}

// Clear last character
function clearLast() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('display').value = currentInput;
}

// Perform calculation and show custom message
function calculate() {
    try {
        let expression = currentInput.replace('×', '*').replace('÷', '/');

        // Check for special case 1 + 1
        if (expression === '1+1') {
            document.getElementById('display').value = 'Ampogi ko'; // Show the custom message
        } else {
            // Perform the calculation for other expressions
            result = eval(expression);
            document.getElementById('display').value = result;
        }

        // Reset input for the next calculation
        currentInput = '';
    } catch (error) {
        alert("Invalid Expression!");
        clearAll();
    }
}
