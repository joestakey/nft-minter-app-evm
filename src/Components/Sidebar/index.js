import React from 'react';

import * as s from './SidebarElements';
import { Button } from '../ButtonElements';

const Sidebar = ({ isOpen, toggle }) => {

    return (
      <s.SidebarContainer isOpen={isOpen} onClick={toggle}>
        <s.SidebarWrapper>
          <s.SidebarMenu>
            <s.SideBarListElement>
              <s.SidebarLink
                to='about'
                href='#about'
                smooth={true}
                duration={800}
                spy={true}
                exact='true'
                offset={-80}
                onClick={toggle}
              >
                About
              </s.SidebarLink>
            </s.SideBarListElement>
            <s.SideBarListElement>
              <s.SidebarLink
                to='features'
                href='#features'
                smooth={true}
                duration={800}
                spy={true}
                exact='true'
                offset={-80}
                onClick={toggle}
              >
                Features
              </s.SidebarLink>
            </s.SideBarListElement>
            <s.SideBarListElement>
              <s.SidebarLink
                to='nftgenerator'
                href='#nftgenerator'
                smooth={true}
                duration={800}
                spy={true}
                exact='true'
                offset={-80}
                onClick={toggle}
              >
                NFT Generator
              </s.SidebarLink>
            </s.SideBarListElement>
            <s.SideBarListElement>
              <s.SidebarLink
                to='specifications'
                href='#specifications'
                smooth={true}
                duration={800}
                spy={true}
                exact='true'
                onClick={toggle}
                offset={-80}
              >
                Specifications
              </s.SidebarLink>
            </s.SideBarListElement>
            <s.SideBarListElement>
              <s.SidebarLink
                to='faq'
                href='#faq'
                smooth={true}
                duration={800}
                spy={true}
                exact='true'
                onClick={toggle}
                offset={-80}
              >
                FAQ
              </s.SidebarLink>
            </s.SideBarListElement>
          </s.SidebarMenu>
          <s.SideBtnWrap>
            <Button to='mint'>Mint</Button>
          </s.SideBtnWrap>
        </s.SidebarWrapper>
      </s.SidebarContainer>
    );
}

export default Sidebar;