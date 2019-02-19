const { assert } = require('chai');

const web3 = global.web3;

const revert = (error) => {
  assert.isAbove(error.message.search('revert'), -1, 'Revert error must be returned')
}

const invalidOpcode = (error) => {
  assert.isAbove(error.message.search('invalid opcode'), -1, 'Invalid opcode error must be returned')
}

const event = (txReceipt, eventName) => {
  assert.isDefined(txReceipt.events[eventName])
}

const event = (txReceipt, eventName, numOfEvents) => {
  assert.isDefined(txReceipt.events[eventName])
  assert.equal(txReceipt.events[eventName].length, numOfEvents)
}

const bytesStrEqual = (bytesString, string) => {
  assert.equal(web3.toUtf8(bytesString), string)
}

module.exports = Object.freeze({
  revert,
  invalidOpcode,
  event,
  bytesStrEqual
})
