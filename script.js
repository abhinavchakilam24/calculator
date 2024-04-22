function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if(num2 == 0){
        return 'Invalid Response';
    }
    return num1 / num2;
}

function operate(num1, num2, operator){
    switch(operator){
        case 'plus': 
            return add(num1, num2);
        case 'subtract': 
            return subtract(num1, num2);
        case 'multiply': 
            return multiply(num1, num2);
        case 'divide': 
            return divide(num1, num2);
        default: 
            return 'Invalid Response';
    }
}

// console.log(operate(10,20,'subtract'));