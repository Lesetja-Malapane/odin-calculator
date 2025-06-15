const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const operators = ["*", "/", "+", "-", "="]

let numA = "";
let numB = "";
let op = "";


function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}


function operate(a, b, op) {
    if (op == "+") {
        return add(a, b)
    }
    if (op == "-") {
        return subtract(a, b)
    }
    if (op == "*") {
        return multiply(a, b)
    }
    if (op == "/") {
        return divide(a, b)
    }
}


numbers.forEach(number => {
    const button = document.createElement("button");
    button.id = "number " + number
    button.value = number
    button.textContent = number;
    document.body.appendChild(button);
});

operators.forEach(operator => {
    const button = document.createElement("button");
    button.id = "operator " + operator
    button.value = operator
    button.textContent = operator;
    document.body.appendChild(button);
});

const myArray = Array.from(document.querySelectorAll("button[id^='number']"));
const myArray2 = Array.from(document.querySelectorAll("button[id^='operator']"));

myArray.forEach(number => {
    number.addEventListener("click", () => {
        if (op == "") {
            numA += number.value
            console.log(numA)
        } else {
            numB += number.value
            console.log(numB)
        }
    })
})

myArray2.forEach(operator => {
    if (operator.value !== "=") {
        operator.addEventListener("click", () => {
            op = operator.value
            console.log(op)
        })
    }
})

myArray2.find(operator => operator.value === "=").addEventListener("click", () => {
    const result = operate(parseFloat(numA), parseFloat(numB), op);
    console.log(result);
    numA = result.toString(); // Store the result for further operations
    numB = ""; // Reset numB for new input
    op = ""; // Reset operator for new input
});