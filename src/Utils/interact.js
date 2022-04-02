import { network } from "../constants.js";

//change here the network you want your app to connect to
const { chainIdHex, name, rpcUrl } = network.polygon

export const connectWallet = async () => {
  console.log('we are in connectWallet!');
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      console.log('method works :) ')
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: chainIdHex }],
        });
        const obj = {
          status: `🌎 Connected to ${name}`,
          address: addressArray[0],
        };
        return obj;
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: chainIdHex,
                  chainName: name,
                  rpcUrls: [
                    rpcUrl,
                  ] /* ... */,
                },
              ],
            });
          } catch (addError) {
            return {
              status: `🚫Could not add the ${name} to your wallet`,
            };
          }
        }
        return {
          status: '🚫Unknown error, please check your wallet'
        }
      }      
    } catch (err) {
      return {
        address: '',
        status: `😥 Please go to your Metamask extension and login`,
      };
    }
  } else {
    return {
      address: '',
      status: (
        <span>
          <p>
            {' '}
            🦊{' '}
            <a
              target='_blank'
              href={`https://metamask.io/download.html`}
              rel='noreferrer'
            >
              Please install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};
