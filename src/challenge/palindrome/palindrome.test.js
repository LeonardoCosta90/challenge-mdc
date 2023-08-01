const isPalindrome = require('./palindrome');

test('checks if "radar" is a palindrome', () => {
  expect(isPalindrome('radar')).toBe(true);
});

test('checks if "level" is a palindrome', () => {
  expect(isPalindrome('level')).toBe(true);
});

test('checks if "hello" is not a palindrome', () => {
  expect(isPalindrome('hello')).toBe(false);
});

test('checks if "A man, a plan, a canal, Panama" is a palindrome', () => {
  expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
});