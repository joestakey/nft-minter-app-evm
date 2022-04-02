import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const ErrorContainer = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height:100vh

`;
export const ErrorHeader = styled.h1`
  font-size: 2.4rem;

  @media screen and (min-width: 520px) {
    font-size: 3.2rem;
  }
  @media screen and (min-width: 760px) {
    font-size: 5rem;
  }
`;

export const ErrorText = styled.p`
  font-size: 1.8rem;

  @media screen and (min-width: 520px) {
    font-size: 2.4rem;
  }
  @media screen and (min-width: 760px) {
    font-size: 3.2rem;
  }
`;

export const ErrorLink = styled(LinkR)`
  cursor: pointer;
  font-size: 1.2rem;

  @media screen and (min-width: 520px) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 760px) {
    font-size: 2.4rem;
  }
`;