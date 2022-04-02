import React, {useState, useEffect} from 'react'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavButton, IconBurger, NavLogoImg } from './NavbarElements';
import ImgSignatureW from '../../Images/Signature2_tr_W.png';
import ImgSignatureC from '../../Images/Signature2_tr_031672.png';
import { Button } from '../ButtonElements';

//''to='#"..." -> other div in other component section that has an id with about
const Navbar = ({ isOpen, toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    //when past particular points -> want this function to trigger
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)   
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };
    //offset of -80 on NavItem because there is -80 on Navbar
    return (
      <>
        <IconContext.Provider value={{ color: '#f7f7f7' }}>
          <Nav $scrollnav={scrollNav}>
            <NavbarContainer $scrollnav={scrollNav}>
              <NavLogo to='/' onClick={toggleHome} $scrollnav={scrollNav}>
                {scrollNav ? (
                  <NavLogoImg src={ImgSignatureC} alt='signature' />
                ) : (
                  <NavLogoImg src={ImgSignatureW} alt='signature' />
                )}
              </NavLogo>

              <NavMenu>
                <NavItem>
                  <NavLinks
                    to='about'
                    smooth='true'
                    $scrollnav={scrollNav}
                    duration={800}
                    spy={true}
                    exact='true'
                    offset={-80}
                    href='#about'
                  >
                    About
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to='features'
                    href='#features'
                    smooth='true'
                    $scrollnav={scrollNav}
                    duration={800}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >
                    Features
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to='nftgenerator'
                    href='#nftgenerator'
                    smooth='true'
                    $scrollnav={scrollNav}
                    duration={800}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >
                    NFT Generator
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to='specifications'
                    href='#specifications'
                    smooth='true'
                    $scrollnav={scrollNav}
                    duration={800}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >
                    Specifications
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to='faq'
                    href='#faq'
                    smooth='true'
                    $scrollnav={scrollNav}
                    duration={800}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >
                    FAQ
                  </NavLinks>
                </NavItem>
              </NavMenu>
              <MobileIcon
                $scrollnav={scrollNav}
                onClick={toggle}
                isOpen={isOpen}
              >
                <IconBurger isOpen={isOpen} $scrollnav={scrollNav}></IconBurger>
                <IconBurger isOpen={isOpen} $scrollnav={scrollNav}></IconBurger>
                <IconBurger isOpen={isOpen} $scrollnav={scrollNav}></IconBurger>
              </MobileIcon>
              <NavButton>
                <Button $primary={scrollNav} to='mint'>
                  Mint
                </Button>
              </NavButton>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </>
    );
}

export default Navbar;

