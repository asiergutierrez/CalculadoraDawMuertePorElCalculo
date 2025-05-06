# CalculadoraDawMuertePorElCalculo
###### Calculadora creada por Yasser, Lucas y Asier.
## Objetivo
Crear una calculadora funcional mediante el uso de HTML, CSS y JS de nivel básico. 
- Organizado mediante el uso de *Trello*.
- Realizado en el editor de texto *Sublime Text*.
## Reparto de tareas
- HTML y JS
> [Yasser](https://github.com/Yasser0618)
- CSS
> [Lucas](https://github.com/lukylu)
- Documentación
> [Asier](https://github.com/asiergutierrez)

# Documentación de la Calculadora

## Descripción General
Este documento describe el funcionamiento del archivo `script.js` que implementa la lógica de una calculadora básica con operaciones aritméticas fundamentales.

## Variables Globales
```javascript
let display = document.querySelector('.resultado');
let currentInput = '';
let currentOperation = '';
let previousInput = '';
```
- `display`: Referencia al elemento de visualización de la calculadora
- `currentInput`: Almacena la entrada actual del usuario
- `currentOperation`: Guarda el operador seleccionado
- `previousInput`: Almacena el valor anterior para operaciones secuenciales

## Funciones Principales

### 1. updateDisplay(value)
```javascript
function updateDisplay(value) {
    display.value = value;
}
```
Actualiza el valor mostrado en la pantalla de la calculadora.

### 2. handleNumber(number)
```javascript
function handleNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}
```
Maneja la entrada de números, concatenándolos a la entrada actual.

### 3. handleOperator(operator)
```javascript
function handleOperator(operator) {
    if (currentInput === '') return;
    
    if (previousInput !== '') {
        calculate();
    }
    
    currentOperation = operator;
    previousInput = currentInput;
    currentInput = '';
}
```
Gestiona los operadores aritméticos y prepara la calculadora para la siguiente operación.

### 4. calculate()
```javascript
function calculate() {
    // Implementa las operaciones aritméticas básicas
    // +, -, *, /, %
}
```
Realiza los cálculos matemáticos según el operador seleccionado.

### 5. clear()
```javascript
function clear() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    updateDisplay('');
}
```
Limpia todos los valores y reinicia la calculadora.

### 6. backspace()
```javascript
function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
}
```
Elimina el último carácter ingresado.

### 7. handleParentheses()
```javascript
function handleParentheses() {
    if (currentInput.includes('(')) {
        currentInput += ')';
    } else {
        currentInput += '(';
    }
    updateDisplay(currentInput);
}
```
Maneja la inserción de paréntesis de forma alternada.

## Event Listeners

### Botones Numéricos
```javascript
document.querySelectorAll('.numeros button').forEach(button => {
    button.addEventListener('click', () => {
        // Maneja números, AC, C y paréntesis
    });
});
```

### Botones de Operadores
```javascript
document.querySelectorAll('.operadores button').forEach(button => {
    button.addEventListener('click', () => {
        // Maneja operadores y el botón igual
    });
});
```

## Operaciones Soportadas
- Suma (+)
- Resta (-)
- Multiplicación (*)
- División (/)
- Porcentaje (%)
- Paréntesis ( )
- Borrado (C)
- Reinicio (AC)

## Características de Seguridad
- Prevención de división por cero
- Validación de entradas
- Manejo de operaciones secuenciales

## Uso
1. Ingrese números usando los botones numéricos
2. Seleccione una operación
3. Ingrese el segundo número
4. Presione '=' para obtener el resultado
5. Use 'C' para borrar el último carácter
6. Use 'AC' para reiniciar la calculadora

## Notas Técnicas
- La calculadora maneja números decimales
- Las operaciones se realizan en tiempo real
- El display se actualiza automáticamente con cada entrada
- Se mantiene el estado de la operación actual
