const { expect } = require('@jest/globals');
const removeDuplicates = require('./RemoveDuplicatesFromSortedArray');

test('returns sum', () => {
    expect(removeDuplicates([1, 2])).toBe(1)
})