const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  if (!sampleActivity ||
    typeof sampleActivity !== 'string' || 
    !parseFloat(sampleActivity) ||
    parseFloat(sampleActivity) <= 0 || 
    parseFloat(sampleActivity) >= 9000 ||
    Math.abs(parseFloat(sampleActivity) > MODERN_ACTIVITY)) {
    return false
  }

  return Math.ceil((Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD)))
  // remove line with error and write your code here
};
