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
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function performCalculation(operation, a, b) {
  try {
    let result = null;
    switch(operation) {
      case '+': result = add(a,b); break;
      case '-': result = subtract(a,b); break;
      case '*': result = multiply(a,b); break;
      case '/': result = divide(a,b); break;
    }
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

performCalculation('+', 5, 3); // Output: Result: 8
performCalculation('-', 10, 4); // Output: Result: 6
performCalculation('*', 7, 2); // Output: Result: 14
performCalculation('/', 9, 3); // Output: Result: 3
performCalculation('/', 5, 0); // Output: Error: Cannot divide by zero