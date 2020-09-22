const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depths = []
    const	insideArrays = []
    
    for (let el of arr) {
      if (Array.isArray(el)) {
        insideArrays.push(el)
      }
    }
    
    if (insideArrays.length === 0) {
      return 1
    }

    for (let arr of insideArrays) {
      const depth = 1 + this.calculateDepth(arr)
      depths.push(depth)
    }
    
    return Math.max(...depths)
}
};