const { expect } = require('@jest/globals');
const intersect = require('./IntersectionOfTwoArrays2');

test('returns [2, 2]', () => {
  expect(intersect([1, 2, 2, 1], [2, 2])).toStrictEqual([2, 2]);
});

test('returns [4, 9]', () => {
  expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toStrictEqual([4, 9]);
});
