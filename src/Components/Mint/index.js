import React, { useState, useEffect, useRef, useContext } from 'react';
import { updateNftIndex } from '../../Redux/nftAction';
import { useDispatch, useSelector } from 'react-redux';
import { ethers, BigNumber } from 'ethers';
import {
  Container,
  MintBg,
  MintContent,
  MintImg,
  Nav,
  NavbarContainer,
  NavLogo,
  MintLabelDiv,
  MintLabel,
  MintSelect,
  MintOption,
  BtnWrapper,
  MintStatus,
  LoadingDiv,
  LoadingAnim,
  LoadingMessage,
  LoadingMessageDiv,
  OutsideContainer,
  NavLogoImg,
} from './MintElements';
import { ButtonButt, ButtonError } from '../ButtonElements';
import { useHistory } from 'react-router-dom';
import video from '../../Images/polynians_background.png';
import ImgSignature from '../../Images/Signature2_tr_W.png';
import { connectWallet } from '../../Utils/interact';
import contractAbi from '../../Ethereum/contractAbi.json';
import {network, PRICE_ONE_NFT } from '../../constants.js';


//change here the network you want your app to connect to
const { chainId, name, currency } = network.polygon;

const Mint = () => {
  const dispatch = useDispatch();
  const nftIndex = useSelector((state) => state.nftIndex);
  const contractAddress = '0xa95841fa907c8a167b03b8ad102a25ac31b03b40';
  const history = useHistory();
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [numberNFTs, setNumberNFTs] = useState(1);
  const [walletAddress, setWalletAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('test');
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);

  const firstLoadWallet = useRef(false);
  const firstLoadNetwork = useRef(false);
  const firstLoadGoToPostMint = useRef(false);
  //update UI depending on wallet connected
  useEffect(() => {
    async function fetchWallet() {
      console.log('UseEffect is happening :)');
      const { address, status } = await connectWallet();
      setWalletAddress(address);
      setStatus(status);
      if (address != 0) {
        setIsWalletConnected(true);
      }
    }
    fetchWallet();
  }, []);

  useEffect(() => {
    async function updateWallet() {
      if (firstLoadWallet.current) {
        console.log('UseEffectAccount is happening :)');
        addWalletListener();
      } else {
        console.log('correct path Account:)');
        firstLoadWallet.current = true;
      }
    }
    updateWallet();
  }, [walletAddress]);

  useEffect(() => {
    async function updateNetwork() {
      console.log(nftIndex)
      if (firstLoadNetwork.current) {
        console.log('UseEffectNetwork is happening :)');
        getCurrentNetworkConnected();
      } else {
        console.log('correct path Network:)');
        firstLoadNetwork.current = true;
      }
    }
    updateNetwork();
  }, [status]);
  
  useEffect(() => {
    async function goToPostMint() {
      if (firstLoadGoToPostMint.current) {
        
        console.log('GoToPostMint is happening :)');      
        console.log(nftIndex);
        setIsLoading(false);
        history.push('/postmint');
      } else {
        console.log('correct path goToPostMint :)');
        
      }
    }
    goToPostMint();
  }, [nftIndex]);

  const addWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        } else {
          setWalletAddress('');
          setStatus('🦊 Connect to Metamask using the top right button.');
        }
      });
    } else {
      setStatus(
        <p>
          {' '}
          🦊{' '}
          <a
            target='_blank'
            href={`https://metamask.io/download.html`}
            rel='noreferrer'
          >
            Please install Metamask, a virtual Ethereum wallet, in your browser.
          </a>
        </p>
      );
    }
  };
  const getCurrentNetworkConnected = () => {
    if (window.ethereum) {
      window.ethereum.on('chainChanged', (_chainId) => {
        if (parseInt(_chainId) == chainId) {
          setStatus(`🌎 Connected to ${name}`);
        } else {
          setStatus(`🦊 Please connect to ${name}`);
        }
      });
    }
  };

  const onChange = (e) => {
    setNumberNFTs(parseInt(e.target.value));
  };
  const onConnectWallet = async () => {
    console.log('calling onConnectWallet');
    const { address, status } = await connectWallet();
    setWalletAddress(address);
    setStatus(status);
  };
  const onMint = async () => {
    //e.preventDefault();
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        chainId
      );
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractAbi.abi,
        signer
      );
      setMessage('');
      setIsLoading(true);
      try {
        setMessage('Waiting for the transaction to be mined...');
        const tx = await contract.mint(BigNumber.from(numberNFTs), {
          value: ethers.utils.parseEther((PRICE_ONE_NFT * numberNFTs).toString()),
        });
        const receipt = await tx.wait();
        console.log(receipt);
        if (numberNFTs === 1) {
          const indexNFT = Array.of(parseInt(receipt.events[1].args[3]._hex));
          dispatch(updateNftIndex(indexNFT));
        } else {
          const indexNFT = receipt.events[1].args[3].map((a) =>
            parseInt(a._hex)
          );
          dispatch(updateNftIndex(indexNFT));
        }
        firstLoadGoToPostMint.current = true;
      } catch (error) {
        onError(error);
        console.log(error);
      }
    }
  };
  const onError = async (e) => {
    setMessage(e.message);
    setIsError(true);
    setTimeout(() => setIsLoading(false), 5000);
    setTimeout(() => setIsError(false), 5000);
  };
  const onDivClick = () => {
    isError && setIsError(false);
  };

  return (
    <>
      <OutsideContainer>
        <Container isLoading={isLoading || isError}>
          <Nav>
            <NavbarContainer>
              <NavLogo to='/'>
                <NavLogoImg src={ImgSignature} alt='signature' />
              </NavLogo>
              <BtnWrapper>
                <ButtonButt
                  onClick={onConnectWallet}
                  disabled={isWalletConnected}
                >
                  {walletAddress.length > 0
                    ? `Connected: ${String(walletAddress).slice(
                        0,
                        6
                      )}...${String(walletAddress).slice(38)}`
                    : `Connect Wallet`}
                </ButtonButt>
              </BtnWrapper>
            </NavbarContainer>
          </Nav>
          <MintBg>
            <MintImg src={video} />
          </MintBg>
          <MintContent isStatus={status}>
            {status === `🌎 Connected to ${name}` ? (
              <MintLabelDiv>
                <div>
                  <MintLabel>How many NFTs do you want ? </MintLabel>
                  <MintSelect name='number' onChange={onChange}>
                    <MintOption value='1'>1</MintOption>
                    <MintOption value='2'>2</MintOption>
                    <MintOption value='3'>3</MintOption>
                    <MintOption value='4'>4</MintOption>
                    <MintOption value='5'>5</MintOption>
                  </MintSelect>
                </div>
                <BtnWrapper>
                  <ButtonButt onClick={onMint}>
                    Mint {numberNFTs} Polynian{numberNFTs === 1 ? `` : `s`}
                  </ButtonButt>
                </BtnWrapper>
                <MintLabel>
                  {`Your minting cost is: ${numberNFTs * PRICE_ONE_NFT} ${currency}`}
                </MintLabel>
                <MintStatus>{status}</MintStatus>
              </MintLabelDiv>
            ) : (
              <ButtonError>{status}</ButtonError>
            )}
          </MintContent>
        </Container>
        {(isLoading || isError) && (
          <LoadingDiv onClick={onDivClick}>
            {isLoading && <LoadingAnim></LoadingAnim>}
            <LoadingMessageDiv isError={isError}>
              <LoadingMessage>
                {isError
                  ? `${message}
          Please ensure you have at least ${
            PRICE_ONE_NFT * numberNFTs
          } ${currency} in your wallet to pay for the mint`
                  : message}
              </LoadingMessage>
            </LoadingMessageDiv>
          </LoadingDiv>
        )}
      </OutsideContainer>
    </>
  );
};

export default Mint;
