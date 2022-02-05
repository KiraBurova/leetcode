const { expect } = require('@jest/globals');
const maxProfit = require('./BestTimeToBuyAndSellStock');

test('returns profit 5', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toStrictEqual(5);
});

test('returns profit 0', () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toStrictEqual(0);
});
