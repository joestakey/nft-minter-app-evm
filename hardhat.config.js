require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-etherscan');
require('solidity-coverage');
require('dotenv').config();


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000,
      },
    },
  },
  defaultNetwork: 'matic',
  networks: {
    hardhat: {},
    matic: {
      url: process.env.ALCHEMY_MATIC_URL,
      chainId: 137,
      accounts: [
        process.env.ACCOUNT_PRIVATE_KEY
      ],
    },
  },
  etherscan: {
    apiKey: {
      polygon: 'F5KK5S5DX6UT55TFH232X55PZ6S971BBT7',
    },
  },
};
