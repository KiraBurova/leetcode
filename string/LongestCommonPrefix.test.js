const { expect } = require('@jest/globals');
const common = require('./LongestCommonPrefix');

test('return fl', () => {
  expect(common(['flower', 'flow', 'flight'])).toStrictEqual('fl');
});

test('return empty string', () => {
  expect(common(['dog', 'racecar', 'car'])).toStrictEqual('');
});
