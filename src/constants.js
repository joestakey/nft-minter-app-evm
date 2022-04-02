export const contractAddress = '0xa95841fa907c8a167b03b8ad102a25ac31b03b40';

export const metadata = 'https://polynians.s3.eu-west-2.amazonaws.com/json/';

export const network = {
  ethereum: {
    chainId: 1,
    chainIdHex: '0x1',
    href: `https://opensea.io/assets/${contractAddress}/`,
    name: 'Ethereum Mainnet',
    currency: 'ETH',
    rpcUrl: 'https://rpc.ankr.com/eth',
  },
  polygon: {
    chainId: 137,
    chainIdHex: '0x89',
    href: `https://opensea.io/assets/matic/${contractAddress}/`,
    name: 'Polygon Mainnet',
    currency: 'MATIC',
    rpcUrl: 'https://polygon-rpc.com',
  },
  rinkeby: {
    chainId: 4,
    chainIdHex: '0x4',
    href: `https://opensea.io/assets/${contractAddress}/`,
    name: 'Rinkeby Test Network',
    currency: 'ETH',
    rpcUrl: 'https://polygon-rpc.com',
  },
  mumbai: {
    chainId: 80001,
    chainIdHex: '0x13881',
    href: `https://opensea.io/assets/mumbai/${contractAddress}/`,
    name: 'Mumbai Testnet',
    currency: 'MATIC',
    rpcUrl: 'https://rinkey.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  },
};
 
//price in ETH (or MATIC)
export const PRICE_ONE_NFT = 2; 
