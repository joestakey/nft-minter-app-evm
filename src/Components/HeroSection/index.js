import React, {useState} from 'react';
import { Button } from '../ButtonElements';
import { FadeIn } from '../FadeEffect';
import ImgBg from '../../Images/polynians_herobackground.png';
import { HeroContainer, HeroBg, ImgB, HeroContent, HeroBtnWrapper, ArrowForward, ArrowRight, HeroH1 } from './HeroElements';


const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return (
      <HeroContainer id='home'>
        <HeroBg>
          <ImgB src={ImgBg} alt='background-gallery' />
        </HeroBg>
        <HeroContent>
          <FadeIn>
            <HeroH1 >Full-Stack NFT Minter</HeroH1>
          </FadeIn>
          <FadeIn delay={500} duration={1000}>
            <HeroBtnWrapper>
              <Button
                to='mint'
                $primary='true'
                smooth='true'
                duration={800}
                spy='true'
                exact='true'
                offset={-80}
                onMouseEnter={onHover}
                onMouseLeave={onHover}
              >
                Mint your NFT now {hover ? <ArrowForward /> : <ArrowRight />}
              </Button>
            </HeroBtnWrapper>
          </FadeIn>
        </HeroContent>
      </HeroContainer>
    );
}

export default HeroSection
