import React from "react";


export const Data = [
  {
    question: 'What stack was used to build this website?',
    answer: (
      <p>
        I used the{' '}
        <a
          href='https://reactjs.org/'
          target='_blank'
          aria-label='reactjs'
          rel='noreferrer noopener'
        >
          React JS
        </a>{' '}
        library to build the website and{' '}
        <a
          href='https://styled-components.com/'
          target='_blank'
          aria-label='styled-components'
          rel='noreferrer noopener'
        >
          Styled Components
        </a>{' '}
        to style it. For the Blockchain part, the contracts were written in{' '}
        <a
          href='https://docs.soliditylang.org/'
          target='_blank'
          aria-label='solidity'
          rel='noreferrer noopener'
        >
          Solidity
        </a>{' '}
        and tested and deployed using{' '}
        <a
          href='https://hardhat.org/'
          target='_blank'
          aria-label='hardhat'
          rel='noreferrer noopener'
        >
          HardHat
        </a>{' '}
        . The scripts creating the connection between the front-end and the
        smart contracts were written using the{' '}
        <a
          href='https://docs.ethers.io'
          target='_blank'
          aria-label='erc1155d article'
          rel='noreferrer noopener'
        >
          ethers.js
        </a>{' '}
        library
      </p>
    ),
  },
  {
    question: 'How are the gas savings in your contracts achieved?',
    answer: (
      <p>
        The NFT contract is following the ERC1155D version of the ERC1155
        standard. It keeps track of one state variable, whereas the ERC721
        standard are keeping track of two.
        <br /> This makes interactions such as minting or selling much cheaper
        using the ERC1155 standard.
        <br /> We ensure assets are non-fungible by using a counter variable
        that gets incremented after each mint. You can find out more about
        it&nbsp;
        <a
          href='https://medium.com/donkeverse/introducing-erc1155d-the-most-efficient-non-fungible-token-contract-in-existence-c1d0a62e30f1'
          target='_blank'
          aria-label='erc1155d article'
          rel='noreferrer noopener'
        >
          here
        </a>
      </p>
    ),
  },
  {
    question: 'About the developper?',
    answer: (
      <p>
        Hey I'm Joe! A developper with a passion for new technologies.
        <br />
        I graduated with a MEng in Electrical and Electronics Engineering in
        2018, and worked as an engineering consultant for three years. I then
        decided to devote myself full-time to software development, with a focus
        on blockchain technologies. <br />
        In my previous roles, I have been valued for my ability to comfortably
        engage with new unfamiliar challenges and swiftly deliver consistently
        high quality professional results.
        <br />
        Here is a list of technologies I have worked with:
        <br />• Javascript ES2020, Typescript
        <br />• ReactJS, NextJS, Styled Components, Tailwind CSS, MaterialUI
        <br />• ethers.js, web3.js, Hardhat, Truffle
        <br />• NodeJS, Express
        <br />• Solidity, Cairo
        <br />
        You can find out about some of my work on{' '}
        <a
          href='https://github.com/joestakey'
          target='_blank'
          rel='noreferrer noopener'
        >
          GitHub
        </a>
      </p>
    ),
  },
  {
    question: 'How can I get in touch?',
    answer: (
      <p>
        If you have a project idea, or simply require more manpower for your
        existing project, please get in touch via{' '}
        <a
          href='mailto:joestakey@gmail.com'
          target='_blank'
          rel='noreferrer noopener'
        >
          email
        </a>
        , or dm me on{' '}
        <a
          href='https://twitter.com/joestakey'
          target='_blank'
          rel='noreferrer noopener'
        >
          Twitter.
        </a>
        <br />I have experience working in large multi-disciplinary teams and am
        happy to work on projects, whether they are small-scale or large-scale. I am looking forward to future collaborations!
      </p>
    ),
  },
];