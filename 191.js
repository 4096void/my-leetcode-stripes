/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 
var hammingWeight = function(n) {
  n = n.toString(2);
  let chars = n.split(''), rs = 0;
  for (let i = 0, l = chars.length; i < l; i++) {
    if (chars[i] === '1') {
      rs += 1;
    }
  }

  return rs;
};

exports.hammingWeight = hammingWeight;