// Variables for storing current input and calculation
let currentInput = '';
let result = '';

// Object to store sum-to-phrase mappings
const sumPhrases = {
    '1+1': 'Ampogi ko',
    '140+3': 'I miss you',
    '2+2': 'I love you',
};

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
        // Replace symbols for proper evaluation
        let expression = currentInput.replace('×', '*').replace('÷', '/');

        // Check if a custom phrase exists for the current expression (ignoring spaces)
        let normalizedExpression = expression.replace(/\s/g, ''); // Remove spaces
        
        // Custom phrase handling
        if (sumPhrases.hasOwnProperty(normalizedExpression)) {
            document.getElementById('display').value = sumPhrases[normalizedExpression]; // Show the custom message
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

// Function to easily add new phrases
function addPhrase(expression, phrase) {
    sumPhrases[expression] = phrase;
}

// Example of adding new phrases
addPhrase('3+5','I miss you so much');
addPhrase('10+5', 'Why do are u so pretty?')
addPhrase('5+1', 'OMG, SO PRETTY')
