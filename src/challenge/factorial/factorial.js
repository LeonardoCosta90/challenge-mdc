function calculateFactorial(number) {
  if (number < 0) {
    throw new Error('Factorial is not defined for negative numbers.');
  }

  if (number === 0 || number === 1) {
    return 1;
  }

  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }

  return factorial;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptInput(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  try {
    const input = await promptInput('Enter a number to calculate its factorial: ');
    const number = parseInt(input);

    if (isNaN(number)) {
      console.log('Invalid input. Please enter a valid number.');
    } else {
      const factorial = calculateFactorial(number);
      console.log(`The factorial of ${number} is ${factorial}.`);
    }
  } catch (error) {
    console.log('An error occurred:', error.message);
  } finally {
    rl.close();
  }
}

main();