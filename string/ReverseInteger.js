// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// -2^31 <= x <= 2^31 - 1

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  // turn into string
  // reverse as string
  // if - keep at first
  // if zero - dont move at first

  let string = String(x);
  let arr = string.split('');
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] === '-') {
      start++;
    } else if (arr[end] === 0) {
      end--;
    } else {
      let first = arr[start];
      arr[start] = arr[end];
      arr[end] = first;
      end--;
      start++;
    }
  }
  const num = Number(arr.join(''));

  if (num <= -(2 ** 31) || num >= 2 ** 31 - 1) {
    return 0;
  }
  return num;
};

module.exports = reverse;
