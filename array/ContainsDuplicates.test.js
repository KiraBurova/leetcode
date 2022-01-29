const { expect } = require('@jest/globals');
const containsDuplicate = require('./ContainsDuplicates');

test('returns 1', () => {
  expect(containsDuplicate([1, 2, 3, 1])).toStrictEqual(true);
});

test('returns 2', () => {
  expect(containsDuplicate([1, 2, 3, 4])).toStrictEqual(false);
});

test('returns 3', () => {
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toStrictEqual(false);
});
