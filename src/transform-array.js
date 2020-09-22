const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error('THROWN')
  }

  const len = arr.length
  const res = []
  for (let i = 0; i < len; i += 1) {
   if(isControlSequence(arr[i])) {
      if (arr[i] === '--discard-prev' && !isUndefined(res[i - 1])) {
        res.splice(i - 1, 1)
      } else if (arr[i] === '--double-prev' && !isUndefined(res[i - 1])) {
        res.splice(i - 1, 0, res[i - 1])
      } else if (arr[i] === '--double-next' && !isUndefined(arr[i + 1])) {
        res.push(arr[i + 1])
      } 
    } else if (arr[i -1] !== '--discard-next') {
      res.push(arr[i])
    }
   }

   return res
  }

const isControlSequence = val => (val === '--discard-next' || val === '--discard-prev' || val === '--double-next' || val === '--double-prev')
const isUndefined = val => val === undefined
