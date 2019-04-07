const assert = require('assert');
const _342 = require('../342');

describe('https://leetcode.com/problems/power-of-four/', function () {
  describe('#isPowerOfFour', function () {
    it('should return true when isPowerOfFour(16)', function () {
      assert.equal(_342.isPowerOfFour(16), true);
    });
    it('should return false when isPowerOfFour(0)', function () {
      assert.equal(_342.isPowerOfFour(0), false);
    });    
  });
});