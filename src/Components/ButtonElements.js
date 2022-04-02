import styled, {css} from "styled-components";
import { Link } from "react-router-dom";

const buttonStyle = css`
  border-radius: 50px;
  background: ${props =>
    props.$primary
      ? 'linear-gradient(99deg,#8E36F5 -18%, #F59AA6 )'
      : 'linear-gradient(99deg, #31E8F4, #B8A0F5)'};
  box-shadow: 10px -10px 30px 5px rgb(255 255 255 / 0.2);
  color: ${props =>
    props.$primary ? '#F7F7F7' : ''};
  white-space: nowrap;
  padding: ${ fontBig  => fontBig ? '2rem' : '1.6rem'};
  outline: none;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  transition: all 0.3s ease-in-out;
  z-index: 9;

  @media screen and (min-width: 500px) {
    font-size: 2rem;
  }
  &:hover:not([disabled]){
    transition: all 0.3s ease-in-out;
    transform-origin: center center;
    transform: scale(1.05);
    filter: brightness(1.1);
  }
  &:disabled {
    background: linear-gradient(99deg,#F5D718 -18%, #DFFAB9 );
    transition: all 0.3s ease-in-out;
    cursor: default;
    //filter: brightness(0.8);
  }
`;
 
export const Button = styled(Link)`
  ${buttonStyle}
`;
export const ButtonExt = styled.a`
  ${buttonStyle}
`;
export const ButtonButt = styled.button`
  ${buttonStyle}
`;
export const ButtonError = styled.p`
  background-color: #f5f2b3;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  z-index: 100;
  box-shadow: 4px 0 40px 10px rgba(0, 0, 0, 0.2);
  padding: 4px 8px;
  font-size: 1.8rem;
  line-height: 17px;
  border-radius: 5px;
  letter-spacing: 1px;
  text-align: center;
`;