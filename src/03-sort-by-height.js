/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      temp.push(arr[i]);
    }
  }
  for (let i = 0; i < temp.length - 1; i++) {
    for (let j = i; j < temp.length; j++) {
      if (temp[i] > temp[j]) {
        const miniTemp = temp[i];
        temp[i] = temp[j];
        temp[j] = miniTemp;
      }
    }
  }
  const result = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(-1);
    } else {
      result.push(temp[counter]);
      counter++;
    }
  }
  return result;
}

module.exports = sortByHeight;
