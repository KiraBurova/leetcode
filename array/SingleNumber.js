// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  // if (nums.length === 1) return nums[0];
  // const map = new Map();
  // for (let i = 0; i < nums.length; i++) {
  //   const element = nums[i];
  //   if (!map.has(element)) {
  //     map.set(element, 1);
  //   } else {
  //     let count = map.get(element);
  //     map.set(element, ++count);
  //   }
  // }
  // for (const [key, value] of map.entries()) {
  //   if (value === 1) return key;
  // }
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }
  return [...set][0];
};

module.exports = singleNumber;
