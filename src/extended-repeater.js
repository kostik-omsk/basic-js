const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //значения по умолчанию
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;
  const additionStr = addition + additionSeparator;
  const repeatedAdditionStr =
    additionStr.repeat(additionRepeatTimes - 1) + addition;
  const repeatedStr = str + repeatedAdditionStr + separator;
  return repeatedStr.repeat(repeatTimes - 1) + str + repeatedAdditionStr;
}

// repeater('STRING', {
//   repeatTimes: 3,
//   separator: '**',
//   addition: 'PLUS',
//   additionRepeatTimes: 3,
//   additionSeparator: '00',
// });
//=>'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
//=>| str  |addition|additionSeparator|addition|additionSeparator|addition|separator|
//=>|STRING|  PLUS  |        00       |  PLUS  |        00       |  PLUS  |   **    |
//=>|STRING|   additionStr=PLUS00     |   additionStr=PLUS00     |  PLUS  |   **    |
//=>| str  |       repeatedAdditionStr = additionStr * 2 +  addition      |separator|
//=>|        repeatedStr = str +  repeatedAdditionStr +  separator                  |
//=>|                   repeatedStr=STRINGPLUS00PLUS00PLUS**                        |
//=>|            return repeatedStr * 2 + str + repeatedAdditionStr                 |
//=>|   STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS      |

module.exports = {
  repeater,
};
