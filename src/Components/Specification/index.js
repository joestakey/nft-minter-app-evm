import React, { useState } from 'react';
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCardLeft,
  ServicesCardRight,
  ServicesP,
  SpecificationSection,
  SpecificationElement,
  SpecificationImg,
  MapLineBottom,
} from './SpecificationElements';
import { Fade } from '@mui/material';
import VizSensor from 'react-visibility-sensor';
import Img1 from '../../Images/icon_polynians.png';

const Specification = () => {
  let [active, setActive] = useState(false);

  return (
    <SpecificationSection>
      <ServicesContainer name='specifications'>
        <ServicesH1>Specifications</ServicesH1>
        <ServicesWrapper>
          <VizSensor
            onChange={(isVisible) => {
              if (isVisible) {
                setActive(isVisible);
              }
            }}
          >
            <Fade in={active} timeout={1000}>
              <ServicesCardRight>
                <SpecificationImg src={Img1} />
                <SpecificationElement>
                  <ServicesH2>USER INTERFACE</ServicesH2>
                  <ServicesP>
                    Fully responsive website built with ReactJS and Styled
                    Components
                  </ServicesP>
                </SpecificationElement>
              </ServicesCardRight>
            </Fade>
          </VizSensor>
          <VizSensor
            onChange={(isVisible) => {
              if (isVisible) {
                setActive(isVisible);
              }
            }}
          >
            <Fade
              in={active}
              timeout={1000}
              style={{ transitionDelay: `400ms` }}
            >
              <ServicesCardLeft>
                <SpecificationImg src={Img1} />
                <SpecificationElement>
                  <ServicesH2>SMART CONTRACTS</ServicesH2>
                  <ServicesP>
                    The NFT smart contract was written using the latest Solidity
                    best practices and has gone through multiple unit tests and integration tests to ensure it yields high savings in gas cost. Minting only costs 54000 gas!
                  </ServicesP>
                </SpecificationElement>
              </ServicesCardLeft>
            </Fade>
          </VizSensor>
          <VizSensor
            onChange={(isVisible) => {
              if (isVisible) {
                setActive(isVisible);
              }
            }}
          >
            <Fade
              in={active}
              timeout={1000}
              style={{ transitionDelay: `800ms` }}
            >
              <ServicesCardRight>
                <SpecificationImg src={Img1} />
                <SpecificationElement>
                  <ServicesH2>ADDITIONAL FEATURES</ServicesH2>
                  <ServicesP>
                    Upon request, the application can also implement the
                    following:
                    <br />
                    • Display all the NFTs that have been minted - with an
                    optional link to OpenSea
                    <br />• Built-in rarity tool page where users can see the
                    rarity of the assets of the collection <br />
                    • Built-in marketplace page to allow NFT owners to sell
                    their assets in a decentralized manner <br />• Staking
                    mechanism using a custom ERC-20 tokens deployed on the same
                    blockchain as the NFT smart contract
                  </ServicesP>
                </SpecificationElement>
              </ServicesCardRight>
            </Fade>
          </VizSensor>
          <VizSensor
            onChange={(isVisible) => {
              if (isVisible) {
                setActive(isVisible);
              }
            }}
          >
            <div>
              <MapLineBottom />
            </div>
          </VizSensor>
        </ServicesWrapper>
      </ServicesContainer>
    </SpecificationSection>
  );
};

export default Specification;
