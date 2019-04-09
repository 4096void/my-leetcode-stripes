/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
  let rs = [];
  nums = nums.sort();

  for (let i = 0, l = nums.length; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      let counterPart = (0 - (nums[i] + nums[j]));
      let rest = nums.slice(j + 1);
      let idx = rest.indexOf(counterPart);

      if (idx > -1) {
        rs.push([nums[i], nums[j], nums[j + 1 + idx]]);
      }
    }
  }

  rs = rs.map(i => i.sort())
    .map(String)
    .reduce((ary, nex) => ary.indexOf(nex) > -1 ? ary : ary.concat(nex), [])
    .map(i => i.split(','))
    .map(i => i.map(Number))

  return rs;
};

exports.threeSum = threeSum;
