/**
 * @param {string} S
 * @return {number[][]}
 */

var largeGroupPositions = function(S) {
  let cs = S.split(''),
    temp = '',
    range = [],
    rs = [];

  for (let i = 0, l = cs.length; i < l; i++) {
    if (cs[i] !== temp) {
      if (range.length === 2
        && range[1] - range[0] >= 2) {
        rs.push(range);
      }

      temp = cs[i];
      range = [];
      range.push(i);
    } else {
      range[1] = i;

      if (i === cs.length - 1
        && range.length === 2
        && range[1] - range[0] >= 2) {
        rs.push(range);
      }
    }
  }

  return rs;
};

exports.largeGroupPositions = largeGroupPositions;