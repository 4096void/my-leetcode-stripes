/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// solution 1 112ms 51.67% 34.7MB 51.95%
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

// solution 2 180ms 17.31% 33.9MB 96.94%
var twoSum_v2 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let idx = nums.indexOf(target - nums[i]);
    if (idx > -1 && idx !== i) {
      return [i, idx];
    }
  }
  return []
};

exports.twoSum = twoSum;
