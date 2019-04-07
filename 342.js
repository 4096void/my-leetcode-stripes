/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  while (num % 4 === 0
    && num > 0) {
    num /= 4;
  }

  return num === 1;
};

exports.isPowerOfFour = isPowerOfFour;