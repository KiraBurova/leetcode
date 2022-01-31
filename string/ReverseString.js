// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  // have a start = 0 end = length - 1
  // while start < end;
  // replace end with start etc

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    let first = s[start];
    s[start] = s[end];
    s[end] = first;
    end--;
    start++;
  }
  return s;
};

module.exports = reverseString;
