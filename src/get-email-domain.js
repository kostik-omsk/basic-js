const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let index = email.indexOf('@');
  let domain = email.slice(index + 1, email.length);
  if (domain.indexOf('@') !== -1) {
    domain = getEmailDomain(domain);
  }
  return domain;
}
// getEmailDomain('very.unusual.@.unusual.com@usual.com'); // 'usual.com'
// getEmailDomain('prettyandsimple@example.com'); //=>'example.com'
module.exports = {
  getEmailDomain,
};
