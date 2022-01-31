const { expect } = require('@jest/globals');
const reverse = require('./ReverseInteger');

test('return 321', () => {
  expect(reverse(123)).toStrictEqual(321);
});

test('return -321', () => {
  expect(reverse(-123)).toStrictEqual(-321);
});

test('return 21', () => {
  expect(reverse(120)).toStrictEqual(21);
});
