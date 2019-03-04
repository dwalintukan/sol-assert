const { assert } = require('chai')
const Web3 = require('web3')

// Initialize Web3
let provider = 'ws://localhost:8546'
if (global.web3) provider = global.web3.currentProvider
console.log(`Using Web3 provider: ${provider}`)
const web3 = new Web3(provider)

module.exports = Object.freeze({
  /**
   * Asserts that the error is a revert type.
   * @param error Error thrown from a transaction.
   */
  revert: (error) => {
    assert.isAbove(error.message.search('revert'), -1, 'Revert error must be returned')
  },

  /**
   * Asserts that the error is an invalid opcode type.
   * @param error Error thrown from a transaction.
   */
  invalidOpcode: (error) => {
    assert.isAbove(error.message.search('invalid opcode'), -1, 'Invalid opcode error must be returned')
  },

  /**
   * Asserts that the transaction emitted an event.
   * @param txReceipt Transaction receipt.
   * @param eventName Name of the event to validate.
   * @param numOfEvents (optional) Number of events emitted with the eventName.
   */
  event: (txReceipt, eventName, numOfEvents) => {
    assert.isDefined(txReceipt.events[eventName])
    if (numOfEvents) {
      assert.equal(txReceipt.events[eventName].length, numOfEvents)
    }
  },
})
