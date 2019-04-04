/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  let max = 0;

  for (let i = 0, l = s.length; i < l; i++) {
    let temp = [];
    let subs = s.slice(i);
    let chars = subs.split('');
    let j = 0;

    while (temp.indexOf(chars[j]) === -1 &&
      j < chars.length) {
      temp.push(chars[j]);
      j += 1;
    }

    if (temp.length > max) {
      max = temp.length;
    }
  }

  return max;
};

exports.lengthOfLongestSubstring = lengthOfLongestSubstring;