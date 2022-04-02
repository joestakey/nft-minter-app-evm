# Full Stack NFT minter

This is a NFT minter app that allow users to connect to the blockchain and mint assets of the [Polynians collection](https://opensea.io/collection/polynians) directly to their wallets.

## How to use the minter

The application can be found [here](https://bespoke-pudding-5503e7.netlify.app). Make sure you have [Metamask installed](https://metamask.io/).

## Smart Contract Address

- [Polynians](https://polygonscan.com/address/0xa95841fa907c8a167b03b8ad102a25ac31b03b40)

## Customise

### Install the dependencies

- clone the repository, then run `npm install`

### Network change

You can change the network the app is connecting to to the one you want to by changing `network.polygon` to `network.the_network_you_want` in the following files:

- [the minter page index file](src/Components/Mint/index.js)
- [the postMinter page index file](src/Components/PostMint/index.js)
- [the utils file](src/Utils/interact.js)

### NFT info change

you can change the smart contract address, metadata uri and NFT minting price in the [constants.js](src/constants.js) file
