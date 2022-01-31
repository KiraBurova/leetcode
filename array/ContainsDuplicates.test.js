const { expect } = require('@jest/globals');
const containsDuplicate = require('./ContainsDuplicates');

test('returns true', () => {
  expect(containsDuplicate([1, 2, 3, 1])).toStrictEqual(true);
});

test('returns false', () => {
  expect(containsDuplicate([1, 2, 3, 4])).toStrictEqual(false);
});

test('returns true', () => {
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toStrictEqual(true);
});
