const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  constructor(straight = true) {
    this.straight = straight;
  }

  encrypt(message, key, decrypt = false) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    let i = 0;
    let charCode;
    message = message.toUpperCase();
    key = key.toUpperCase();

    while (key.length < message.length) {
      key += key;
    }

    for (let item of message) {
      const number = item.charCodeAt(0);
      if (number >= 65 && number <= 90) {
        const numberCode = (key[i++].charCodeAt(0) - 65) % 32;
        if (decrypt) {
          charCode = number + 65 - numberCode;
        } else {
          charCode = number - 65 + numberCode;
        }
        item = String.fromCharCode((charCode % 26) + 65);
      }
      result += item;
    }
    return this.straight ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    return this.encrypt(message, key, true);
  }
}
// │ A │ B │ C │ D │ E │ F │ G │ H │ I │ J │ K │ L │ M │ N │ O │ P │ Q │ R │ S │ T │ U │ V │ W │ X │ Y │ Z │
// │ 65│ 66│ 67│ 68│ 69│ 70│ 71│ 72│ 73│ 74│ 75│ 76│ 77│ 78│ 79│ 80│ 81│ 82│ 83│ 84│ 85│ 86│ 87│ 88│ 89│ 90│

//      A | B | C | D | E | F | G | H | I  | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z
//      - |---| - |-- |---| - |-- |-- |--- | --| - |-- |-- |-- |---| - |-- |-- |-- |-- |-- |---| - |-- |-- |--
// A  | B | C | D | E | F | G | H | I | J  | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z | A
// B  | C | D | E | F | G | H | I | J | K  | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z | A | B
// C  | D | E | F | G | H | I | J | K | L  | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z | A | B | C
// D  | E | F | G | H | I | J | K | L | M  | N | O | P | Q | R | S | T | U | V | W | X | Y | Z | A | B | C | D
// E  | F | G | H | I | J | K | L | M | N  | O | P | Q | R | S | T | U | V | W | X | Y | Z | A | B | C | D | E
// F  | G | H | I | J | K | L | M | N | O  | P | Q | R | S | T | U | V | W | X | Y | Z | A | B | C | D | E | F
// G  | H | I | J | K | L | M | N | O | P  | Q | R | S | T | U | V | W | X | Y | Z | A | B | C | D | E | F | G
// H  | I | J | K | L | M | N | O | P | Q  | R | S | T | U | V | W | X | Y | Z | A | B | C | D | E | F | G | H
// I  | J | K | L | M | N | O | P | Q | R  | S | T | U | V | W | X | Y | Z | A | B | C | D | E | F | G | H | I
// J  | K | L | M | N | O | P | Q | R | S  | T | U | V | W | X | Y | Z | A | B | C | D | E | F | G | H | I | J
// K  | L | M | N | O | P | Q | R | S | T  | U | V | W | X | Y | Z | A | B | C | D | E | F | G | H | I | J | K
// L  | M | N | O | P | Q | R | S | T | U  | V | W | X | Y | Z | A | B | C | D | E | F | G | H | I | J | K | L
// M  | N | O | P | Q | R | S | T | U | V  | W | X | Y | Z | A | B | C | D | E | F | G | H | I | J | K | L | M
// N  | O | P | Q | R | S | T | U | V | W  | X | Y | Z | A | B | C | D | E | F | G | H | I | J | K | L | M | N
// O  | P | Q | R | S | T | U | V | W | X  | Y | Z | A | B | C | D | E | F | G | H | I | J | K | L | M | N | 0



module.exports = {
  VigenereCipheringMachine,
};
