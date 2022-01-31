const { expect } = require('@jest/globals');
const twoSum = require('./TwoSum');

test('returns [0,1]', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});

test('returns [1,2]', () => {
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
});

test('returns [0,1]', () => {
  expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
});
