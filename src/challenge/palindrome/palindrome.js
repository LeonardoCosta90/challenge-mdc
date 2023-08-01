function isPalindrome(word) {
  const lowerCaseWord = word.toLowerCase();
  const reversedWord = lowerCaseWord.split('').reverse().join('');
  return lowerCaseWord === reversedWord;
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
    const word = await promptInput('Enter a word: ');

    if (isPalindrome(word)) {
      console.log(`${word} is a palindrome.`);
    } else {
      console.log(`${word} is not a palindrome.`);
    }
  } catch (error) {
    console.log('An error occurred:', error.message);
  } finally {
    rl.close();
  }
}

main();