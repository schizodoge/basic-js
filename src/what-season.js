const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {


  if (!date) {
    return 'Unable to determine the time of year!'
  }

  if (!(date instanceof Date) || Object.keys(date).length > 0) {
    throw new Error('THROWN')
  }

  const month = date.getMonth()
  if (month <= 1 || month === 11) {
    return 'winter'
  }

  if (month <= 4) {
    return 'spring'
  }

  if (month <= 7) {
    return 'summer'
  }

  return 'autumn'
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
