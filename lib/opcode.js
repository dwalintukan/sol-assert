const { assert } = require('chai')

const checkMessage = (err, msg) => {
  if (msg) {
    assert.isAbove(
      err.message.search(msg), 
      -1, 
      `Error message not found in error: ${msg}`,
    )
  }
}

module.exports = {
  /**
   * Executes a promise and checks for a revert error.
   * @param prom Promise to be executed
   * @param msg Error message text to look for in err (optional)
   */
  revert: async (prom, msg) => {
    try {
      await Promise.all([prom])
    } catch (err) {
      assert.isAbove(
        err.message.search('revert'), 
        -1, 
        'Revert error must be returned',
      )
      checkMessage(err, msg)
      return
    }
    throw Error('No error was not caught')
  },

  /**
   * Executes a promise and checks for an invalid opcode error.
   * @param prom Promise to be executed
   * @param msg Error message text to look for in err (optional)
   */
  invalidOpcode: async (prom, msg) => {
    try {
      await Promise.all([prom])
    } catch (err) {
      assert.isAbove(
        err.message.search('invalid opcode'), 
        -1, 
        'Invalid opcode error must be returned',
      )
      checkMessage(err, msg)
      return
    }
    throw Error('No error was not caught')
  },
}
