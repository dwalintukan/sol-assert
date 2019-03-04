const Web3 = require('web3')

// Initialize Web3
let provider = 'ws://localhost:8546'
if (global.web3) provider = global.web3.currentProvider
const web3 = new Web3(provider)

module.exports = web3
