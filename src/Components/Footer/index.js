import React from 'react';
import { animateScroll as scroll} from 'react-scroll';
import * as f from './FooterElements';
import Icon1 from '../../Images/Signature2_tr_031672.png';
import { ReactComponent as IconTwitter } from '../../Images/twitter.svg';
import { ReactComponent as IconOpenSea } from '../../Images/opensea.svg';
import { ReactComponent as IconEtherscan } from '../../Images/etherscan.svg';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    
    return (
      <f.FooterContainer>
        <f.FooterWrap>
          <f.SocialMedia>
            <f.SocialMediaWrap>
              <f.SocialMediaWrapbis>
                <f.SocialLogo to='/' onClick={toggleHome}>
                  <f.FooterIcon src={Icon1} alt='signature' />
                </f.SocialLogo>
              </f.SocialMediaWrapbis>
              <f.WebsiteRights>
                © {new Date().getFullYear()} Joe Stakey. All rights reserved.
              </f.WebsiteRights>
              <f.SocialIcons>
                <f.SocialIconLink
                  href='https://twitter.com/joestakey/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Twitter'
                >
                  <IconTwitter />
                </f.SocialIconLink>
                <f.SocialIconLink
                  href='https://opensea.io/collection/polynians'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='OpenSea'
                >
                  <IconOpenSea />
                </f.SocialIconLink>
                <f.SocialIconLink
                  href='https://polygonscan.com/address/0xa95841fa907c8a167b03b8ad102a25ac31b03b40#code'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Smart Contract'
                >
                  <IconEtherscan />
                </f.SocialIconLink>
              </f.SocialIcons>
            </f.SocialMediaWrap>
          </f.SocialMedia>
        </f.FooterWrap>
      </f.FooterContainer>
    );
}

export default Footer
