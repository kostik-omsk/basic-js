const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  for (let domain of domains) {
    let subdomains = domain.split('.').reverse();
    let domainItem = '';
    for (let subdomain of subdomains) {
      domainItem = domainItem + '.' + subdomain;
      if (obj.hasOwnProperty(domainItem)) {
        obj[domainItem] += 1;
      } else {
        obj[domainItem] = 1;
      }
    }
  }
  return obj;
}

module.exports = {
  getDNSStats,
};
