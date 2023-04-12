const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodin = '';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      count++;
    } else {
      count = count == 0 ? '' : count + 1;
      encodin += count + str[i];
      count = 0;
    }
  }
  return encodin;
}
// encodeLine('aabbbc'); //=>'2a3bc'
module.exports = {
  encodeLine,
};
