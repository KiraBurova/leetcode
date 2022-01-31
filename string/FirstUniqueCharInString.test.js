const { expect } = require('@jest/globals');
const firstUnique = require('./FirstUniqueCharInString');

test('return 0', () => {
  expect(firstUnique('leetcode')).toStrictEqual(0);
});

test('return 2', () => {
  expect(firstUnique('loveleetcode')).toStrictEqual(2);
});

test('return -1', () => {
  expect(firstUnique('aabb')).toStrictEqual(-1);
});
