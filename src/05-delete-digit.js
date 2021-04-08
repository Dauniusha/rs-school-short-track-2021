/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = n.toString().split('');
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    array = n.toString().split('');
    array.splice(i, 1);
    if (Number(array.join('')) > max) {
      max = Number(array.join(''));
    }
    array = n.toString().split('');
  }
  return max;
}

module.exports = deleteDigit;
