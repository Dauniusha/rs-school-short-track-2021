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
  const temp1 = s1.split('');
  const temp2 = s2.split('');
  let counter = 0;
  for (let i = 0; i < temp1.length; i++) {
    for (let j = 0; j < temp2.length; j++) {
      if (temp1[i] === temp2[j]) {
        temp1.splice(i, 1);
        temp2.splice(j, 1);
        i--;
        j--;
        counter++;
      }
    }
  }
  return counter;
}

module.exports = getCommonCharacterCount;
