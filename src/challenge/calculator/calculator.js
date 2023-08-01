const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

function promptInput(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  try {
    const num1 = parseFloat(await promptInput('Enter the first number: '));
    const operator = await promptInput('Enter the operator (+, -, *, /): ');
    const num2 = parseFloat(await promptInput('Enter the second number: '));

    let result;
    switch (operator) {
      case '+':
        result = add(num1, num2);
        break;
      case '-':
        result = subtract(num1, num2);
        break;
      case '*':
        result = multiply(num1, num2);
        break;
      case '/':
        result = divide(num1, num2);
        break;
      default:
        throw new Error('Invalid operator. Please enter a valid operator (+, -, *, /).');
    }

    console.log(`Result: ${result}`);
  } catch (error) {
    console.log('An error occurred:', error.message);
  } finally {
    rl.close();
  }
}

main();