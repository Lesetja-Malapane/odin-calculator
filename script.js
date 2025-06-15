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

let numA;
let numB;
let op;

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

const numbers = [0,1,2,3,4,5,6,7,8,9]
const operators = ["*", "/", "+", "-"]

numbers.forEach(number => {
    const button = document.createElement("button");
    button.id = "number " + number
    button.textContent = number;
    document.body.appendChild(button);
});

operators.forEach(operator => {
    const button = document.createElement("button");
    button.id = "operator " + operator
    button.textContent = operator;
    document.body.appendChild(button);
});

const myArray = document.querySelectorAll("button");

