const { expect } = require('@jest/globals');
const singleNumber = require('./SingleNumber');

test('returns 1', () => {
  expect(singleNumber([2, 2, 1])).toStrictEqual(1);
});

test('returns 2', () => {
  expect(singleNumber([4, 1, 2, 1, 2])).toStrictEqual(4);
});

test('returns 3', () => {
  expect(singleNumber([1])).toStrictEqual(1);
});
