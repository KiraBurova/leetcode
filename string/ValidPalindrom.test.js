const { expect } = require('@jest/globals');
const isValid = require('./ValidPalindrom');

test('return true', () => {
  expect(isValid('A man, a plan, a canal: Panama')).toStrictEqual(true);
});

test('returns false', () => {
  expect(isValid('race a car')).toStrictEqual(false);
});

test('returns true empty string', () => {
  expect(isValid(' ')).toStrictEqual(true);
});
