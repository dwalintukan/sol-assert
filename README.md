# sol-assert

Helper assertion library for Solidity testing

## Install

```bash
npm install --save-dev sol-assert
```

## Usage

```js
const sassert = require('sol-assert')
```

### .revert

```js
// Testing for revert
await sassert.revert(myContract.methods.myFunc().send())

// Testing for specific error message
await sassert.revert(
    myContract.methods.myFunc().send(),
    'Text that should be from the thrown error in the contract')
```

### .invalidOpcode

```js
// Testing for invalid opcode
await sassert.invalidOpcode(myContract.methods.myFunc().send())

// Testing for specific error message
await sassert.invalidOpcode(
    myContract.methods.myFunc().send(),
    'Text that should be from the thrown error in the contract')
```

### .event

```js
function test1() {
    // Calling ERC20 transfer
    const receipt = await token.methods['transfer(address,uint256)'](ACCT1, 1).send({ from: OWNER })
    // Expect the `Transfer` event to be emitted
    sassert.event(receipt, 'Transfer')
}

function test2() {
    // Calling ERC223 transfer
    const receipt = await token.methods['transfer(address,uint256,bytes)'](ACCT1, 1).send({ from: OWNER })
    // Expect 2 Transfer events to be emitted because in my ERC223 contract I emit both Transfer events:
    // event Transfer(address indexed from, address indexed to, uint256 amount);
    // event Transfer(address indexed from, address indexed to, uint256 amount, bytes data);
    sassert.event(receipt, 'Transfer', 2)
}
```
