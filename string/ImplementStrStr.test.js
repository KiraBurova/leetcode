const { expect } = require('@jest/globals');
const strStr = require('./ImplementStrStr');

test('return 2', () => {
  expect(strStr('hello', 'll')).toStrictEqual(2);
});

test('return -1', () => {
  expect(strStr('aaaaa', 'bba')).toStrictEqual(-1);
});

test('return -1', () => {
  expect(strStr('', '')).toStrictEqual(0);
});
