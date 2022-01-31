// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  // create map for sum - el -> i
  // loop over nums
  // set each element in map
  // if el already in map -> return its index and map[i]
  const map = new Map();

  // [2,7,11,15]
  // 9 - 2 -> 7 -> 0
  // 0, 1
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const firstIndex = map.get(nums[i]);
      return [firstIndex, i];
    } else {
      map.set(target - nums[i], i);
    }
  }
};

module.exports = twoSum;
