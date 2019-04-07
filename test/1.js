const assert = require('assert');
const _1 = require('../1');

describe('https://leetcode.com/problems/two-sum/', function () {
  describe('#twoSum()', function () {
    it('should return [0, 1] when twoSum([2, 7, 1, 3, 4], 9)', function () {
      assert.deepEqual(_1.twoSum([2, 7, 1, 3, 4], 9), [0, 1]);
    });
    it('should return [] when twoSum([1, 2, 3], 999)', function () {
      assert.deepEqual(_1.twoSum([1, 2, 3], 999), []);
    });
  });
});