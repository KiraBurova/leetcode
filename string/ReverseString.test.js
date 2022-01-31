const { expect } = require('@jest/globals');
const reverseString = require('./ReverseString');

test('return 1', () => {
  expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toStrictEqual(['o', 'l', 'l', 'e', 'h']);
});

test('returns 2', () => {
  expect(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])).toStrictEqual(['h', 'a', 'n', 'n', 'a', 'H']);
});
