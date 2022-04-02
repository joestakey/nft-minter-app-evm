import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

//z-index 999 to always be at top
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 200px;
  transform: ${({ isOpen }) =>
    isOpen ? `translateX(-50%)` : `translateX(100%)`};
  background: linear-gradient(99deg, #8e36f5 -15%, #f59aa6);
  box-shadow: inset 4px -4px 3px #8e36f5, inset 8px -8px 60px -5px #8e36f5,
    inset -7px 7px 5px -4px rgb(245 154 166 / 40%);
  border-radius: 8px;
  margin: 0 auto;
  padding: 1rem;
  top: 78px;
  right: -80px;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: all 0.3s cubic-bezier(0.52, -0.82, 0.5, 1.57);

  @media screen and (min-width: 480px) {
    width: 300px;
    right: -120px;
  }
`;

export const SidebarWrapper = styled.div`
  color: #031672;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 60px);
    text-align: center;

    @media screen and (min-width: 480px) {
        grid-template-rows: repeat(5, 80px);
    }
`

export const SideBarListElement = styled.li`
  width: 100%;
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  transition: background 0.5s;
  text-decoration: none;
  color: #031672;
  cursor: pointer;

  &:hover {
    color: #83d0f5;
    transition: 0.2s ease-in-out;
  }
  @media screen and (min-width: 480px) {
    font-size: 2.4rem;
  }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #83d0f5;
  white-space: nowrap;
  padding: 1.8rem 4rem;
  font-size: 1.8rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: hsl(199, 85%, 87%);
    color: #010606;
  }
`;
