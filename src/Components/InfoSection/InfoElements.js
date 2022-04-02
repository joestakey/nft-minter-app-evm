import styled from 'styled-components';

export const InfoSectionWrapper = styled.section`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#788dfa' : '#83d0f5')};  
  
`;

export const InfoContainer = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 4rem;
  min-height: calc(100vh - 80px);
  width: 100%;
  display: grid;
  z-index: 1;
  justify-items: center;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: 'col1' 'col2';

  @media screen and (min-width: 670px) {
    padding: 10rem 6rem;
  }
  @media screen and (min-width: 960px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2 col1'` : `'col1 col2'`};
    gap: 4rem;
    padding-top: 4rem;
    grid-template-columns: 1fr 1fr;
  }
`;


export const Column1 = styled.div`
  grid-area: col1;
  width: 100%;
  margin-bottom: 4rem;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  
`;

export const Column2 = styled.div`
  grid-area: col2;
  display: block;
  width: 100%;
  margin-bottom: 12rem;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (min-width: 670px) {
    margin-bottom: 0;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const Heading = styled.h1`
  color: #f59aa6;
  margin-bottom: 2.4rem;
  font-size: 4.2rem;
  line-height: 1.1;
  font-weight: 600;
  text-shadow: -3px 3px 0 #031672, 3px 3px 0 #031672, 3px -3px 0 #031672,
    -3px -3px 4px #031672;
  align-self: flex-start;

  @media screen and (min-width: 900px) {
    font-size: 4.8rem;
  }
`;

export const Subtitle = styled.h3`
  margin: 0 0 3.5rem;
  font-size: 2rem;
  line-height: 2.8rem;

  a {
    color: #031672;
    &:hover {
      transition: all 0.3s ease-in-out;
      filter: brightness(1.8);
    }
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 2rem;
  align-self: center;

  @media screen and (min-width: 960px) {
    align-self: auto;
  }
`;

export const ImgWrap = styled.div`
  
`;

export const Img = styled.img`
  display: inline-block;
  vertical-align: middle;
  object-fit: contain;
  width: 100%;
  max-width: 50rem;
`;

export const Video = styled.video`
  display: inline-block;
  width: 100%;
  max-width: 50rem;
  vertical-align: middle;
  //  margin: auto
  object-fit: contain;
`;
