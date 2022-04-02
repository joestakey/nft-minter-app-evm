import React, { useState} from 'react';
import { Button, ButtonExt } from '../ButtonElements';
import { InfoContainer, InfoSectionWrapper, Column1, Column2, TextWrapper, Heading, Subtitle, BtnWrap, Img, Video  } from './InfoElements';
//import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img, Video  } from './InfoElements2';
import VizSensor from 'react-visibility-sensor';
import { Fade } from '@mui/material';


const InfoSection = ({lightBg, id, imgStart, lightText, headline, description, buttonLabel, alt, img, video, primary, buttonLink, extButton, dynamic}) => {

    let [active, setActive] = useState(false);

    return (
      <InfoSectionWrapper lightBg={lightBg} id={id} imgStart={imgStart}>
        <InfoContainer id={id} imgStart={imgStart}>
          <Column1>
            <VizSensor
              onChange={(isVisible) => {
                if (isVisible) {
                  setActive(isVisible);
                }
              }}
            >
              <Fade in={active} timeout={1000}>
                <TextWrapper>
                  <Fade
                    in={active}
                    timeout={1000}
                    style={{ transitionDelay: `400ms` }}
                  >
                    <Heading lightText={lightText}>{headline}</Heading>
                  </Fade>
                  <Fade
                    in={active}
                    timeout={1000}
                    style={{ transitionDelay: `800ms` }}
                  >
                    <Subtitle >{description}</Subtitle>
                  </Fade>
                  <BtnWrap>
                    {extButton ? (
                      <ButtonExt
                        smooth='true'
                        duration={500}
                        spy='true' //so it knows how to add active class to it
                        exact='true'
                        offset={-80} //to trigger the change in navbar
                        $primary={primary}
                        href={buttonLink}
                        target='_blank'
                      >
                        {buttonLabel}
                      </ButtonExt>
                    ) : buttonLabel === '' ? null : (
                      <Button
                        smooth='true'
                        duration={500}
                        spy='true' //so it knows how to add active class to it
                        exact='true'
                        offset={-80} //to trigger the change in navbar
                        $primary={primary}
                        to={buttonLink}
                      >
                        {buttonLabel}
                      </Button>
                    )}
                  </BtnWrap>
                </TextWrapper>
              </Fade>
            </VizSensor>
          </Column1>
          <Column2>
            {dynamic ? (
              <Video autoPlay muted loop>
                <source src={video} type='video/mp4' />
              </Video>
            ) : (
              <Img src={img} alt={alt}></Img>
            )}
          </Column2>
        </InfoContainer>
      </InfoSectionWrapper>
    );
}

export default InfoSection
