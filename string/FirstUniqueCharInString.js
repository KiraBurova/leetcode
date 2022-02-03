// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    if (!map.has(letter)) {
      map.set(letter, 1);
    } else {
      let value = map.get(letter);
      map.set(letter, ++value);
    }
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) return s.indexOf(key);
  }

  return -1;
};

module.exports = firstUniqChar;
