let display = '0';
let firstNumber = null;
let operation = null;
let newOperation = true;

const screen = document.getElementById('ecran');
const numberButtons = document.querySelectorAll('.btn-numero');
const addButton = document.getElementById('btnAdditionner');
const subtractButton = document.getElementById('btnSoustraire');
const divideButton = document.getElementById('btnDiviser');
const multiplyButton = document.getElementById('btnMultiplier');
const equalsButton = document.getElementById('btnEgal');
const clearButton = document.getElementById('btnClear');

function updateScreen() {
    screen.textContent = display;
}

function addDigit(digit) {
    if (newOperation) {
        display = digit;
        newOperation = false;
    } else {
        if (display ==='0'){
            display=digit;
        } else {
            display += digit;
        }
    }

    updateScreen();
}

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const digit = btn.getAttribute('data-numero');
        addDigit(digit);
    });
});

function chooseOperation(op) {
    if (firstNumber === null) {
        firstNumber=parseFloat(display);
    }else if (operation !== null) {
        calculate();
        firstNumber = parseFloat(display);
    }
    operation = op;
    newOperation = true;
}

addButton.addEventListener('click', () => {
    chooseOperation('+');
});
subtractButton.addEventListener('click', () => {
    chooseOperation('-');
});
multiplyButton.addEventListener('click', () => {
    chooseOperation('×');
});
divideButton.addEventListener('click', () => {
    chooseOperation('÷');
});

function calculate () {
    if (firstNumber===null || operation===null) {
        return;
    }
    const secondNumber =parseFloat(display);
    
    let result;

    switch (operation) {
        case '+':
        result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '×':
            result = firstNumber * secondNumber;
            break; 
        case '÷': 
            result = firstNumber / secondNumber;
            break;
    }
    display = result.toString ();
    operation = null;
    firstNumber = null;
    newOperation = true;
    updateScreen()
};

equalsButton.addEventListener('click', calculate);

function clear() {
    display = '0';
    firstNumber = null;
    operation = null;
    newOperation = true;
    updateScreen()
};

clearButton.addEventListener('click', clear);