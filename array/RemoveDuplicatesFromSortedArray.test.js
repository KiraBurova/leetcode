const { expect } = require('@jest/globals');
const RemoveDuplicatesFromSortedArray = require('./RemoveDuplicatesFromSortedArray');

test('returns 5', () => {
  expect(RemoveDuplicatesFromSortedArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toStrictEqual(5);
});
