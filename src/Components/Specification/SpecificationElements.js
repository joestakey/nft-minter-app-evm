import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useViewanimation } from '../useViewanimation';

export const SpecificationSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #788dfa;
  color: #fff;
  min-height: 100vh;
  padding: 1.5rem 6rem;
`;
export const ServicesContainer = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
`;

export const ServicesWrapper = styled.div`
  margin-bottom: 6rem;
  position: relative;
  box-sizing: content-box;
`;

export const ServicesCardRight = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  opacity: 1;

  @media screen and (min-width: 960px) {
    flex-direction: row;
  }
`;
export const ServicesCardLeft = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  opacity: 1;

  @media screen and (min-width: 960px) {
    flex-direction: row-reverse;
  }
`;

export const SpecificationImg = styled.img`
  display: block;
  max-width: 60px;
  margin-top: 1.5rem;
  user-select: none;
  z-index: 2;

  @media screen and (min-width: 960px) {
    margin: 1.5rem;
  }
`;

export const SpecificationElement = styled.div`
  padding: 0rem 2.3rem 0.9rem;
  width: 100%;
  max-width: 420px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  border: 2px solid;
  border-radius: 2rem;

  @media screen and (min-width: 960px) {
    padding: 0.9rem 2.3rem;
    border: 2px solid;
    /* img -> width of 60 and margin of 1.5rem*/
    width: calc((50% - 30px) - 1.5rem);
    max-width: none;
    border-radius: 2rem;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 4.2rem;
  position: relative;
  max-width: 600px;
  margin: 4.5rem auto 4.5rem;
  text-align: center;

  @media screen and (min-width: 960px) {
    font-size: 4.8rem;
    margin-top: 6rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.8rem;
  display: inline-block;
  margin-bottom: 1rem;

  @media screen and (min-width: 960px) {
    font-size: 2.4rem;
    margin: 1rem 0 0;
  }
`;

export const ServicesP = styled.p`
  font-size: 1.8rem;
  display: block;
  margin: 1rem 0;
`;

const LineBottom = styled(motion.div)`
  display: none;
  position: absolute;
  top: 9%;
  left: calc(50% - 1px);
  height: 90%;
  width: 0px;
  border-left: 6px dotted black;

  @media screen and (min-width: 960px) {
    display: block;
  }
  @media screen and (min-width: 1040px) {
    top: 10%;
  }
`;

export const MapLineBottom = () => {
  const { controls, variants, ref } = useViewanimation();

  return (
    <LineBottom
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={variants}
    ></LineBottom>
  );
};
