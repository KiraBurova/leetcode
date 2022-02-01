const { expect } = require('@jest/globals');
const isValid = require('./ValidAnagram');

test('return true', () => {
  expect(isValid('aacc', 'ccac')).toStrictEqual(false);
});

test('returns false', () => {
  expect(isValid('rat', 'car')).toStrictEqual(false);
});
