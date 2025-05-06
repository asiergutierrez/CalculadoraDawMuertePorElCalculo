// Variables globales
let display = document.querySelector('.resultado');
let currentInput = '';
let currentOperation = '';
let previousInput = '';

// Función para actualizar el display
function updateDisplay(value) {
    display.value = value;
}

// Función para manejar números
function handleNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

// Función para manejar operadores
function handleOperator(operator) {
    if (currentInput === '') return;
    
    if (previousInput !== '') {
        calculate();
    }
    
    currentOperation = operator;
    previousInput = currentInput;
    currentInput = '';
}

// Función para calcular el resultado
function calculate() {
    if (currentInput === '' || previousInput === '') return;
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('No se puede dividir por cero');
                return;
            }
            result = prev / current;
            break;
        case '%':
            result = (prev * current) / 100;
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    previousInput = '';
    currentOperation = '';
    updateDisplay(currentInput);
}

// Función para limpiar
function clear() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    updateDisplay('');
}

// Función para eliminar último carácter
function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
}

// Función para manejar paréntesis
function handleParentheses() {
    if (currentInput.includes('(')) {
        currentInput += ')';
    } else {
        currentInput += '(';
    }
    updateDisplay(currentInput);
}

// Agregar event listeners a los botones
document.addEventListener('DOMContentLoaded', () => {
    // Botones numéricos
    document.querySelectorAll('.numeros button').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            
            if (value === 'AC') {
                clear();
            } else if (value === 'C') {
                backspace();
            } else if (value === '( )') {
                handleParentheses();
            } else {
                handleNumber(value);
            }
        });
    });

    // Botones de operadores
    document.querySelectorAll('.operadores button').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            
            if (value === '=') {
                calculate();
            } else {
                handleOperator(value);
            }
        });
    });
}); 