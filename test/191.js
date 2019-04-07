const assert = require('assert');
const _191 = require('../191');

const cases = {
  _1: {
    i: 0b00000000000000000000000000001011,
    o: 3,
  },
  _2: {
    i: 0b00000000000000000000000010000000,
    o: 1,
  },
  _3: {
    i: 0b11111111111111111111111111111101,
    o: 31,
  },
};

describe('https://leetcode.com/problems/number-of-1-bits/', function () {
  describe('#hammingWeight', function () {
    it('should return 3 when hammingWeight(00000000000000000000000000001011)', function () {
      assert.equal(_191.hammingWeight(cases._1.i), cases._1.o);
    });
    it('should return 1 when hammingWeight(00000000000000000000000010000000)', function () {
      assert.equal(_191.hammingWeight(cases._2.i), cases._2.o);
    });
    it('should return 31 when hammingWeight(11111111111111111111111111111101)', function () {
      assert.equal(_191.hammingWeight(cases._3.i), cases._3.o);
    });    
  });
});