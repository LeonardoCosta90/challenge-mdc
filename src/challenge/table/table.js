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

async function printMultiplicationTable(number) {
  console.log(`Multiplication Table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

async function main() {
  try {
    const input = await promptInput('Enter a number: ');
    const number = parseInt(input);

    if (isNaN(number)) {
      console.log('Invalid input. Please enter a valid number.');
    } else {
      printMultiplicationTable(number);
    }
  } catch (error) {
    console.log('An error occurred:', error.message);
  } finally {
    rl.close();
  }
}

main();