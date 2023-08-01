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

function calculateFinalValue(initialCapital, interestRate, investmentTimeInMonths) {
  if (isNaN(initialCapital) || isNaN(interestRate) || isNaN(investmentTimeInMonths)) {
    throw new Error('Invalid input. Please enter valid numbers for initial capital, interest rate, and investment time.');
  }

  if (initialCapital <= 0 || interestRate <= 0 || investmentTimeInMonths <= 0) {
    throw new Error('Invalid input. Initial capital, interest rate, and investment time must be greater than zero.');
  }

  const monthlyInterestRate = interestRate / 100 / 12;
  const finalValue = initialCapital * Math.pow(1 + monthlyInterestRate, investmentTimeInMonths);

  return finalValue.toFixed(2);
}

async function main() {
  try {
    const initialCapital = parseFloat(await promptInput('Enter the initial capital: $'));
    const interestRate = parseFloat(await promptInput('Enter the interest rate (%): '));
    const investmentTimeInMonths = parseInt(await promptInput('Enter the investment time (in months): '));

    const finalValue = calculateFinalValue(initialCapital, interestRate, investmentTimeInMonths);
    console.log(`The final value of the investment is: $${finalValue}`);
  } catch (error) {
    console.log('An error occurred:', error.message);
  } finally {
    rl.close();
  }
}

main();