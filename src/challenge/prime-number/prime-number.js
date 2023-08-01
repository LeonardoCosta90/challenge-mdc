function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
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


function printFirstNPrimes(N) {
  const primes = [];
  let currentNumber = 2;

  while (primes.length < N) {
    if (isPrime(currentNumber)) {
      primes.push(currentNumber);
    }
    currentNumber++;
  }

  return primes;
}

async function main() {
  try {
    const N = parseInt(await promptInput('Enter the number of prime numbers to print: '));
    const nPrimes = 10
    if (isNaN(N) || N <= 0) {
      console.log('Invalid input. Please enter a positive integer.');
    } else {
      const firstNPrimes = printFirstNPrimes(nPrimes);
      console.log(`First ${nPrimes} prime numbers:`, firstNPrimes.join(", "));   
    }
  } catch (error) {
    console.log('An error occurred:', error.message);
  } finally {
    rl.close();
  }
}

main();