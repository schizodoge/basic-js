const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = ''} = options

  // const result = repeatStr(String(str), repeatTimes, separator)
  const additionRepeated = repeatStr(String(addition), additionRepeatTimes, additionSeparator)
  return repeatStr(String(str) + additionRepeated, repeatTimes, separator)

};

const repeatStr = (str, repeatTimes, separator) => {
  const result = []

  for (let i = 0; i < repeatTimes; i += 1) {
    result.push(str)
  }

  return result.join(separator)

}