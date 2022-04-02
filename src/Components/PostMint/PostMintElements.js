import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const PostSection = styled.section`
  background: #639EBA;
  padding: 4rem 1rem;
  @media screen and (min-width: 600px) {
    padding: 10rem 2rem;
  }
  min-height: 100vh;
`;
export const PostContainer = styled.div`
  background: rgb(131, 208, 245);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 3rem;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  //align-items: center;
`;

export const PostHeader = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  @media screen and (min-width: 600px) {
    font-size: 4rem;
  }
`;
export const PostSubHeader = styled.h2`
  font-size: 2rem;
`;
export const PostInsideContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;

  @media screen and (min-width: 600px){
    flex-direction: row;
  }
`;

export const PostFigure = styled.figure`
  //max-width: 100%;
  padding: 1rem;
  border-radius: 2rem;
  box-shadow: 14px 9px 34px -12px rgb(0, 0, 245, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 400px) {
    flex-direction: row;
  }
  @media screen and (min-width: 600px) {
    flex-direction: column;
  }
`;

export const PostImg = styled.img`
  max-width: 100px;
  min-width: 100px;
  box-shadow: 14px 9px 34px -12px rgb(0, 0, 245, 0.6);
  object-fit: contain;
  @media screen and (min-width: 600px) {
    max-width: 100px;
    display: block;
  }
`;

export const PostCaptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PostCaption = styled.figcaption`
  font-size: 2rem;
  padding-left: 2rem;
  @media screen and (min-width: 600px) {
    padding-top: 2rem;
    padding-left: 0;
  }
`;

export const PostLink = styled.a`
  color: #031672;
  padding-left: 2rem;
  font-size: 1.4rem;
  @media screen and (min-width: 600px) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 600px) {
    padding-left: 0;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    filter: brightness(1.8);
  }
`;

export const PostLinkHome = styled(LinkR)`
  font-size: 1.6rem;
  text-align: center;
`;