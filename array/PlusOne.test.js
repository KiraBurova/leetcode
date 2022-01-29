const { expect } = require('@jest/globals');
const plusOne = require('./PlusOne');

test('returns 1', () => {
  expect(plusOne([1, 2, 3])).toStrictEqual([1, 2, 4]);
});

test('returns 2', () => {
  expect(plusOne([4, 3, 2, 1])).toStrictEqual([4, 3, 2, 2]);
});

test('returns 3', () => {
  expect(plusOne([9])).toStrictEqual([1, 0]);
});
