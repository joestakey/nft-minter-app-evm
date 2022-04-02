import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

//background container
const DropDownSection = styled.section`
	padding: 1rem;

  @media screen and (min-width: 768px) {
    padding: 3rem 6rem ;
  }
`;

//container where questions are
const Container = styled.div`
  min-height: 400px;
  margin: 0 auto;
  width: 100%;
  max-width: 1160px;

`;

const Heading = styled.h1`
	font-size: 4.2rem;
	margin: 4.5rem auto;
	line-height: 3.2rem;
	text-align: center;

  @media screen and (min-width: 900px) {
    font-size: 4.8rem;
  }

`;

const Wrap = styled(motion.div)`
  padding: 2rem;
  margin-bottom: 2rem;
  cursor: pointer;
  border: 3px solid;
  border-radius: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #b8e5f9;
  }

  h1 {
    font-size: 2rem;
    padding-right: 2rem;
  }
  
`;

const Triangle = styled.span`
  display: block;
  height: 2rem;
  width: 2rem;
  max-height: 2.8rem;
  font-size: 2.8rem;
  clip-path: polygon(100% 50%, 0% 100%, 0 0%);
  background: #031672;
  transform: ${({ clicked, i }) =>
    clicked === i + 1 ? 'rotate(90deg)' : 'rotate(0deg)'};
  transition: transform 0.3s ease-in-out;
`;

const Drop = styled(motion.div)`
  text-align: left;
  overflow: hidden;
  padding: 0 2.3rem;

  p {
    font-size: 1.8rem;
    margin-bottom: 2rem;

    a {
      color: #031672;
      &:hover {
        transition: all 0.3s ease-in-out;
        filter: brightness(1.8);
      }
    }
  }
`;




const Accordion = ({ i, clicked, setClicked, item }) => {
  return (
    <>
      <Wrap onClick={() => setClicked(clicked === i + 1 ? null : i + 1)}>
        <h1>{item.question} </h1>
        <Triangle clicked={clicked} i={i} />
      </Wrap>
      <AnimatePresence initial={false}>
        {clicked === i + 1 && (
          <Drop
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <p>{item.answer}</p>
            <p>{item.answer2}</p>
            <p>{item.answer3}</p>
            <p>{item.answer4}</p>
          </Drop>
        )}
      </AnimatePresence>
    </>
  );
};

const DropDown = () => {
    const [clicked, setClicked] = useState(null)

    return (
      <DropDownSection id='faq'>
        <Container>
          <Heading> FAQ </Heading>
          {Data.map((item, i) => 
            <Accordion
              key={i}
              i={i + 1}
              clicked={clicked}
              setClicked={setClicked}
              item={item}
            />
          )}
        </Container>
      </DropDownSection>
    );
};

export default DropDown;
