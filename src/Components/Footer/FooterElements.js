import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #83d0f5;
`;

export const FooterWrap = styled.div`
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1160px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #F59AA6;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (min-width: 820px) {
    flex-direction: row;
    padding: 0 2rem;
  }
`;

export const SocialMediaWrapbis = styled.div`
    display: flex;
    /* justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px 300px 0 auto; 
/* 
    @media screen and (max-width: 820px) {
        flex-direction: column;
    } */
`;

export const SocialLogo = styled(Link)`
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const WebsiteRights = styled.small`
    font-size: 1.4rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin-top: 2rem;

  @media screen and (min-width: 820px) {
    margin: 0;
  }
`;

export const SocialIconLink = styled.a`
  width: 2rem;
  color: #031672;
  &:hover {
    color: #f59aa6;
    transition: 0.3s ease-out;
  }
`;

export const FooterIcon = styled.img`
    height: 75px;
`;