function countVowels(sentence) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of sentence) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
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
    const sentence = await promptInput('Enter a sentence: ');
    const vowelCount = countVowels(sentence);

    console.log(`The sentence has ${vowelCount} vowel(s).`);
  } catch (error) {
    console.log('An error occurred:', error.message);
  } finally {
    rl.close();
  }
}

main();