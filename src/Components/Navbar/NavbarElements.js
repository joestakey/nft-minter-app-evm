import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';


export const Nav = styled.nav`
  background: ${ props  => props.$scrollnav ? '#83d0f5' : 'transparent'};
  height: 80px;
  margin-top: -80px; 
  font-size: 1.8rem;
  position: sticky;
  display: flex;
  top: 0;
  width: 100%;
  z-index: 10;
  transition: 0.8s all ease;
  

  @media screen and (min-width: 900px) {
    transition-duration: 0s;
    padding: 1rem;
  }
`;

export const NavbarContainer = styled.div`
  color: ${ props  => props.$scrollnav ? '#031672' : '#F7F7F7'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 4rem;
  padding: 0 16px;

  @media screen and (min-width: 500px) {
    padding: 0 24px;
  }
`;
//essentially link from React router
export const NavLogo = styled(LinkR)`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 3rem;
  margin-left: 0px;
  font-weight: bold;
  text-decoration: none;
  color: ${ props => props.$scrollnav ? '#031672' : '#F7F7F7'};

  /* @media screen and (max-width: 900px) {
    position: absolute;
    top: 1rem;
    left: 1rem;
  } */

  @media screen and (min-width: 500px) {
    font-size: 3rem;
    margin-left: 24px;
  }
`;

export const NavLogoImg = styled.img`
  max-height: 75px;
  object-fit: contain;
`;
//only displaying when reaching certain breakpoint
export const MobileIcon = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  transition: all .5s ease-in-out;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const IconBurger = styled.div`
  width: 4rem;
  height: 0.6rem;
  background: ${ props => props.$scrollnav ? `#031672` : `#F7F7F7`};
  transition: all 0.3s cubic-bezier(0.52, -0.82, 0.5, 1.57);
  border-radius: 3px;
  transform-origin: 1px;

  &:nth-child(1) {
    transform: ${({ isOpen }) =>
      isOpen ? `rotate(45deg) translateY(0)` : `rotate(0)`};
  }
  &:nth-child(2) {
    transform: ${({ isOpen }) =>
      isOpen ? `translateX(100%)` : `translateX(0)`};
    opacity: ${({ isOpen }) => (isOpen ? `0` : `1`)};
  }
  &:nth-child(3) {
    transform: ${({ isOpen }) => (isOpen ? `rotate(-45deg)` : `rotate(0)`)};
  }
`;



export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;  
    padding-left: 0.5rem ;
`;

//active class for highlighting element on screen the cursor is on
export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  color: ${(props) => (props.$scrollnav ? `#031672` : `#F7F7F7`)};
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #f59aa6;
  }
`;

export const NavButton = styled.nav`
    display: flex;
    align-items: center;   

    @media screen and (max-width: 900px) {
    display: none;
    }
`;


