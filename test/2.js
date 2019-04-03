const assert = require('assert');
const two = require('../2');

// 5
const five = {
  val: 5,
  next: null,
};
// 0 -> 1
const ten = {
  val: 0,
  next: {
    val: 1,
    next: null,
  },
};

describe('https://leetcode.com/problems/add-two-numbers/', function () {
  describe('#addTwoNumbers', function () {
    it('should return 0 -> 1 when addTwoNumbers(5, 5)', function () {
      assert.deepEqual(two.addTwoNumbers(five, five), ten);
    });
  });
});