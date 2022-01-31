const { expect } = require('@jest/globals');
const moveZeroes = require('./MoveZeroes');

test('returns [1, 3, 12, 0, 0]', () => {
  expect(moveZeroes([0, 1, 0, 3, 12])).toStrictEqual([1, 3, 12, 0, 0]);
});

test('returns [0]', () => {
  expect(moveZeroes([0])).toStrictEqual([0]);
});
