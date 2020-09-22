const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    // throw new CustomError('Not implemented');
    return this.chain.length
    // remove line with error and write your code here
  },
  addLink(value = '') {
    // throw new CustomError('Not implemented');
    this.chain.push(value)
    return this
    /* return this.chain */
    // remove line with error and write your code here
  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    if (this.chain[position - 1] === undefined) {
      this.chain = []
      throw new Error('THROWN')
    }
    this.chain.splice(position - 1, 1)
    return this
    /* return this.chain */
    // remove line with error and write your code here
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse()
    return this
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    const finished = this.chain.map(el => `( ${el} )`).join('~~')
    this.chain = []
    return finished
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
