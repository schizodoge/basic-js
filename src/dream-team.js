const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }

  const arr = []
  for (let name of members) {
    if (typeof name === 'string') {
      arr.push(name.trim()[0].toUpperCase())
    }
  }
  return arr.sort().join('')
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
