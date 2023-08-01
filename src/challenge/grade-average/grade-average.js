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

async function calculateAverage(grades) {
  let total = 0;
  for (let grade of grades) {
    total += grade;
  }
  return total / grades.length;
}

async function main() {
  try {
    const grades = [];
    for (let i = 1; i <= 3; i++) {
      const input = await promptInput(`Enter grade ${i}: `);
      const grade = parseFloat(input);
      if (isNaN(grade)) {
        console.log('Invalid input. Please enter a valid number for the grade.');
        return;
      }
      grades.push(grade);
    }

    const average = await calculateAverage(grades);
    console.log(`The average grade is: ${average.toFixed(2)}`);
  } catch (error) {
    console.log('An error occurred:', error.message);
  } finally {
    rl.close();
  }
}

main();