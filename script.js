const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ["*", "/", "+", "-", "="];

let numA = "";
let numB = "";
let op = "";

// Basic arithmetic functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Error: Division by zero is not allowed.");
        return "Error";
    }
    return a / b;
}

// Operate function to handle operations
function operate(a, b, op) {
    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return null;
    }
}

// Update the display in the HTML
function updateDisplay(content) {
    const display = document.getElementById("calculate-space");
    display.textContent = content;
}

// Create number buttons dynamically
numbers.forEach(number => {
    const button = document.createElement("button");
    button.id = "number-" + number;
    button.value = number;
    button.textContent = number;
    document.getElementById("buttons-container").appendChild(button);
});

// Create operator buttons dynamically
operators.forEach(operator => {
    const button = document.createElement("button");
    button.id = "operator-" + operator;
    button.value = operator;
    button.textContent = operator;
    document.getElementById("buttons-container").appendChild(button);
});

// Select buttons for numbers and operators
const numberButtons = Array.from(document.querySelectorAll("button[id^='number']"));
const operatorButtons = Array.from(document.querySelectorAll("button[id^='operator']"));

// Handle number button clicks
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (op === "") {
            numA += button.value;
            updateDisplay(numA); // Update display with numA
        } else {
            numB += button.value;
            updateDisplay(`${numA} ${op} ${numB}`); // Show the full operation
        }
    });
});

// Handle operator button clicks
operatorButtons.forEach(button => {
    if (button.value !== "=") {
        button.addEventListener("click", () => {
            if (numA !== "" && numB === "") {
                op = button.value;
                updateDisplay(`${numA} ${op}`); // Show numA and operator
            }
        });
    }
});

// Handle "=" button click
operatorButtons.find(button => button.value === "=").addEventListener("click", () => {
    if (numA !== "" && numB !== "" && op !== "") {
        const result = operate(parseFloat(numA), parseFloat(numB), op);
        if (result !== "Error") {
            updateDisplay(`${numA} ${op} ${numB} = ${result}`); // Show the full operation and result
            numA = result.toString(); // Store the result for further operations
        } else {
            updateDisplay("Error"); // Display error message
        }
        numB = ""; // Reset numB for new input
        op = ""; // Reset operator for new input
    } else {
        alert("Incomplete operation. Please provide valid inputs.");
    }
});

// Handle "Clear" button click
document.getElementById("clear").addEventListener("click", () => {
    numA = "";
    numB = "";
    op = "";
    updateDisplay("Calculate:"); // Reset the display
});