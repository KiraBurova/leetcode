const { expect } = require('@jest/globals');
const strStr = require('./ImplementStrStr');

test('return fl', () => {
  expect(strStr(['flower', 'flow', 'flight'])).toStrictEqual('fl');
});

test('return empty string', () => {
  expect(strStr(['dog', 'racecar', 'car'])).toStrictEqual('');
});
