const assert = require('assert');
const _15 = require('../15');

const cases = [{
  i: [0, 0, 0],
  o: [[0, 0, 0]],
}];

describe('#15 https://leetcode.com/problems/3sum/', function () {
  describe('#threeSum', function () {
    cases.forEach(function (c) {
      it('should works', function () {
        assert.deepEqual(_15.threeSum(c.i), c.o);
      });
    });
  });
});
