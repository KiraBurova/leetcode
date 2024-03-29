const { expect } = require('@jest/globals');
const maxProfit = require('./BestTimeToBuyandSellStock2');

test('returns profit 7', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toStrictEqual(7);
});

test('returns profit 4', () => {
  expect(maxProfit([1, 2, 3, 4, 5])).toStrictEqual(4);
});

test('returns profit 0', () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toStrictEqual(0);
});
