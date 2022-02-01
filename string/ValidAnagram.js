// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  let anagram = true;

  if (s.length !== t.length) {
    anagram = false;
  }

  const firstStringMap = new Map();

  for (const value of s) {
    if (!firstStringMap.has(value)) {
      firstStringMap.set(value, 1);
    } else {
      let v = firstStringMap.get(value);
      firstStringMap.set(value, ++v);
    }
  }

  for (let i = 0; i < t.length; i++) {
    const element = t[i];

    if (!firstStringMap.has(element) || firstStringMap.get(element) === 0) {
      anagram = false;
    } else if (firstStringMap.has(element)) {
      let value = firstStringMap.get(element);
      firstStringMap.set(element, --value);
    }
  }

  return anagram;
};

module.exports = isAnagram;
