const assert = require('assert');
const _3 = require('../3');

/* 'asjrgapa' -> 6 */
const cases = {
  'asjrgapa': {
    i: 'asjrgapa',
    o: 6,
  },
  'bbbbb': {
    i: 'bbbbb',
    o: 1,
  },
};

describe('#3 https://leetcode.com/problems/longest-substring-without-repeating-characters/', function () {
  describe('#lengthOfLongestSubstring', function () {
    it('should return 6 when lengthOfLongestSubstring(\'asjrgapa\')', function () {
      assert.equal(_3.lengthOfLongestSubstring(cases['asjrgapa'].i), cases['asjrgapa'].o);
    });
    it('should return 1 when lengthOfLongestSubstring(\'bbbbb\')', function () {
      assert.equal(_3.lengthOfLongestSubstring(cases['bbbbb'].i), cases['bbbbb'].o);
    });
  });
});
