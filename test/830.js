const assert = require('assert');
const _830 = require('../830');

const cases = {
  abbxxxxzzy: {
    i: 'abbxxxxzzy',
    o: [[3, 6]],
  },
  abc: {
    i: 'abc',
    o: [],
  },
  abcdddeeeeaabbbcd: {
    i: 'abcdddeeeeaabbbcd',
    o: [[3,5],[6,9],[12,14]],
  },
  aaa: {
    i: 'aaa',
    o: [[0, 2]],
  },
};

describe('#830 https://leetcode.com/problems/positions-of-large-groups/', function () {
  describe('#largeGroupPositions', function () {
    it('should return [[3,6]] when largeGroupPositions(\'abbxxxxzzy\')', function () {
      assert.deepEqual(_830.largeGroupPositions(cases.abbxxxxzzy.i), cases.abbxxxxzzy.o);
    });
    it('should return [] when largeGroupPositions(\'abc\')', function () {
      assert.deepEqual(_830.largeGroupPositions(cases.abc.i), cases.abc.o);
    });
    it('should return [[3,5],[6,9],[12,14]] when largeGroupPositions(\'abcdddeeeeaabbbcd\')', function () {
      assert.deepEqual(_830.largeGroupPositions(cases.abcdddeeeeaabbbcd.i), cases.abcdddeeeeaabbbcd.o);
    });
    it('should return [[0, 2]] when largeGroupPositions(\'aaa\')', function () {
      assert.deepEqual(_830.largeGroupPositions(cases.aaa.i), cases.aaa.o);
    });
  });
});
