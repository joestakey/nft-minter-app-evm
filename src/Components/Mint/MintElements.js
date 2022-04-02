import styled, { keyframes} from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

const load3 = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;

export const OutsideContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(45deg, #f59aa6, #de81bc);
`;
export const Container = styled.div`
  height: 100%;
  filter: ${({isLoading}) => isLoading && `brightness(0.5)`};
  padding-bottom: 1rem;
`;

export const Nav = styled.nav`
  background: transparent;
  font-size: 2.4rem;
  display: flex;
  transition: 0.8s all ease;

  @media screen and (min-width: 500px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 600px) {
    height: 80px;
  }

  @media screen and (min-width: 900px) {
    transition-duration: 0s;
    padding: 1rem;
  }
`;

export const NavbarContainer = styled.div`
  color: #F7F7F7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 4rem;
  padding: 1rem 16px;
  

  @media screen and (min-width: 600px) {
    padding: 1.6rem 24px;
    flex-direction: row;
  }
`;
//essentially link from React router
export const NavLogo = styled(LinkR)`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 0px;
  font-weight: bold;
  text-decoration: none;
  color: #F7F7F7;

  @media screen and (min-width: 500px) {
    font-size: 3rem;
    margin-left: 24px;
  }
`;
export const NavLogoImg = styled.img`
  max-height: 75px;
  object-fit: contain;
`;

export const MintBg = styled.section`
  /* position: absolute;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0; */
  margin: 2rem auto 0;

  width: 300px;
  /* height: calc(100% - 80px); */
  overflow: hidden;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 600px) {
    margin-top: 0;
    padding: 4rem 0;
    width: 500px;
    align-items: flex-start;
  }
`;
export const MintContent = styled.div`
  /* height: calc(100% - 80px); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const MintImg = styled.img`
  max-width: 200px;

  @media screen and (min-width: 600px) {
    max-width: 400px;
  }
`;

export const MintLabelDiv = styled.div`
  z-index: 2;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(45deg, #f59aa6, #de81bc);
  box-shadow: 8px 8px 30px rgb(174 174 192 / 35%),
    inset -8px -8px 12px rgb(255 255 255 / 15%),
    inset 8px 8px 8px rgb(174 174 192 / 4%);
  transition: all 0.15s ease-out;
  border-radius: 3rem;
`;
export const MintLabel = styled.label`
  font-size: 1.6rem;
  text-align: center;
  @media screen and (min-width: 500px) {
    font-size: 2rem;
  }
`;

export const MintSelect = styled.select`
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  border-radius: 1rem;
  border: none;
  background: linear-gradient(45deg, #f59aa6, #de81bc);
  box-shadow: 8px 8px 30px rgb(174 174 192 / 35%),
    inset -8px -8px 12px rgb(255 255 255 / 15%),
    inset 8px 8px 8px rgb(174 174 192 / 4%);
  color: #031672;
  transition: all 0.3s ease-in-out;

  &:focus-visible {
    outline: #83d0f5 solid 1px;
  }
  &:hover {
    filter: brightness(1.1);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;

export const MintOption = styled.option`
  display: inline-block;
`;

export const BtnWrapper = styled.div`
  //margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const MintStatus = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;

export const LoadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0; 
  width: 100%;
  height: 100%;
  padding: 20%;
  padding-top: 2rem;

`;
export const LoadingAnim = styled.div`
  color: #83d0f5;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  //font-size: 10px;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;
  animation-fill-mode: both;
  animation: ${load3} 1s infinite ease-in-out;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -3.5em;
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation: ${load3} 1s infinite ease-in-out;
    animation-fill-mode: both;
    animation-delay: -0.32s;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 3.5em;
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation: ${load3} 1s infinite ease-in-out;
    animation-fill-mode: both;
  }
`;

export const LoadingMessageDiv = styled.div`
  background: ${({ isError }) =>
    isError
      ? `linear-gradient(99deg, #D7A485, #D6182D)`
      : `linear-gradient(99deg, #31e8f4, #b8a0f5)`};
  border-radius: 1rem;
  box-shadow: 4px 4px 4px;
`;
export const LoadingMessage = styled.p`
  margin: 2rem 1rem;
  min-width: 200px;
  text-align: center;
  font-size: 2rem;

  @media screen and (min-width: 500px) {
    margin: 4rem 2rem;
    font-size: 2.4rem;
  }
`;