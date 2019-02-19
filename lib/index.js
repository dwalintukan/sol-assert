const { assert } = require('chai')
const Web3 = require('web3')

const web3 = new Web3()

module.exports = Object.freeze({
  revert: (error) => {
    assert.isAbove(error.message.search('revert'), -1, 'Revert error must be returned')
  },
  invalidOpcode: (error) => {
    assert.isAbove(error.message.search('invalid opcode'), -1, 'Invalid opcode error must be returned')
  },
  event: (txReceipt, eventName, numOfEvents) => {
    assert.isDefined(txReceipt.events[eventName])
    if (numOfEvents) {
      assert.equal(txReceipt.events[eventName].length, numOfEvents)
    }
  },
  bytesStrEqual: (bytesString, string) => {
    assert.equal(web3.toUtf8(bytesString), string)
  },
})
