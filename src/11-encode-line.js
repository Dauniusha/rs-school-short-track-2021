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
  let result = '';
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    let j = i;
    while (str[i] === str[j]) {
      counter++;
      j++;
    }
    if (counter === 1) {
      result += str[i];
    } else {
      result += counter + str[i];
    }
    counter = 0;
    i = j - 1;
  }
  return result;
}

module.exports = encodeLine;
