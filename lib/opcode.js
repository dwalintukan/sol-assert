const { assert } = require('chai')

module.exports = {
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
}
