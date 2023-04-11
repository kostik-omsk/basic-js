const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonCount = 0;
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    if (s2.indexOf(char) !== -1) {
      commonCount++;
      // Удаляем символ из s2, чтобы не учитывать его повторные вхождения
      s2 = s2.replace(char, '');
    }
  }
  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
