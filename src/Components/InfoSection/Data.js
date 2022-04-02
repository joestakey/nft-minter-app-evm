//create reusable components
//file where we pass in all the different values
// can update design of our website without hardcoding these properties
//makes it reusable
import React from 'react';


export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: false,
  lightTextDesc: true,
  topLine: 'Description',
  headline: 'NFT Minting App',
  description: (
    <p>
      This application is connected to the Polygon blockchain, allowing users
      to mint NFTs directly from the blockchain, without having to interact with
      a centralized platform like OpenSea.
      <br />
      <br />
      The collection featured here is Polynians, 1000 randomly generated little
      cuties. <br />
      You can mint one and experience writing to the blockchain in a decentralized manner. It only costs 2 MATIC!
    </p>
  ),
  buttonLink: 'mint',
  buttonLabel: 'Mint yours now',
  dynamic: false,
  imgStart: false, //decide on which side image appears (L/R)
  img: require('../../Images/polynians_background.png').default,
  alt: 'polynians',
  primary: true,
};

export const homeObjTwo = {
  id: 'features',
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: 'DApp features',
  headline: 'Features',
  description: (
    <p>
      The application allows users to : <br /><br />
      • connect to Metamask
      <br />
      • mint NFTs
      <br />
      • see the asset they just minted on{' '}
      <a
        href='https://opensea.io/collection/polynians'
        target='_blank'
        rel='noreferrer noopener'
      >
        OpenSea
      </a>
      <br />
      <br />
      For a seamless user experience, the minting page also displays the wallet that is currently connected, as well as the network it needs to connect to perform a mint
      <br />
    </p>
  ),
  buttonLink: 'mint',
  buttonLabel: <p>Try minting an NFT!</p>,
  dynamic: false,
  imgStart: true, //decide on which side image appears (L/R)
  img: require('../../Images/Minter_page.png').default,
  alt: 'minter page',
  primary: true,
};

export const homeObjThree = {
  id: 'nftgenerator',
  lightBg: false,
  lightText: false,
  lightTextDesc: true,
  topLine: 'nft generator services',
  headline: 'NFT Generator',
  description: (
    <p>
      A NFT generator service is also available. Artists just need to provide
      individual layers that will represent the traits of the NFTs - such as
      heads, eyes, outfits, equipment. The output is:
      <br />
      <br />
      • unique randomly generated art pieces in PNG or GIF format
      <br />
      • custom metadata associated with each NFT
      <br />
      • fully customizable rarity of each trait
      <br />
    </p>
  ),
  dynamic: true,
  imgStart: false, //decide on which side image appears (L/R)
  video: require('../../Videos/video_background.mp4').default,
  alt: 'nftgenerator',
  buttonLabel: '',
  primary: true,
};