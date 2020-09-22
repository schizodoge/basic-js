const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  let count = 0

  for (let row of matrix) {
    for (let el of row) {
      if (el === '^^') {
        count += 1
      }
    }
  }

  return count
  // remove line with error and write your code here
};
