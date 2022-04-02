import React, {useEffect, useState, useRef} from 'react'
import { useSelector } from 'react-redux';
import { PostContainer, PostInsideContainer, PostHeader, PostSubHeader, PostFigure, PostImg, PostCaption,  PostLink, PostSection, PostCaptionDiv, PostLinkHome } from './PostMintElements';
import { network, metadata } from '../../constants.js';

//change here the network you want your app to connect to
const { href } = network.polygon;

const PostMint = () => {
  const nftIndex = useSelector((state) => state.nftIndex);
  const [imgUrlstate, setImgUrlstate] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const jsonUrls = [];
  const imgUrls = [];
  const componentMounted = useRef(true);
  const fetchURLs = async () => {
    try {
      nftIndex.forEach((item) => {
        jsonUrls.push(
          `${metadata}${item}.json`
        );
      })
      console.log(`we have mapped all the URIs`)
      const requests = jsonUrls.map((url) => fetch(url));
      const responses = await Promise.all(requests);
      const errors = responses.filter((response) => !response.ok)
      if (errors.length > 0) {
        throw errors.map((response) => Error(response.statusText));
      }
      const json = responses.map((res) => res.json());
      const data = await Promise.all(json);
      data.forEach((element) => {
        imgUrls.push(
          element.image            
        );
      })
      if (componentMounted.current){
        console.log(imgUrls);
        setImgUrlstate(imgUrls);
        setIsLoading(false);
      }
      return () => {
        componentMounted.current = false;
      }  
    }
    catch (error) {
      console.error(error)
    }
  }
  useEffect( () => {
    async function fetchUrls() {
      await fetchURLs();
    };
    console.log(`The current nftIndex is ${nftIndex}`)
    fetchUrls(); 
  }, [])
  


  return (
    <PostSection>
      <PostContainer>
        <PostHeader>
          Congratulations, you are now part of the Polynians family!👽
        </PostHeader>
        <PostSubHeader>Here is what you just minted</PostSubHeader>
        <PostInsideContainer>
          {isLoading
            ? () => {
                return <div>Please wait a few seconds, your NFTs are about to be displayed</div>;
              }
            : nftIndex.map((item, index) => {
                return (
                  <PostFigure key={index}>
                    {console.log(`${imgUrlstate[index]}`)}
                    <PostImg
                      src={`${imgUrlstate[index]}`}
                      alt={`Polynian ${item}`}
                    />
                    <PostCaptionDiv>
                      <PostCaption> Polynian #{item} </PostCaption>
                      <PostLink
                        href={`${href}${item}`}
                        target='_blank'
                        rel='noreferrer noopener'
                      >
                        Check it on OpenSea!
                      </PostLink>
                      <p>
                        It can take a couple minutes for your Opensea to load
                        your metadata
                      </p>
                    </PostCaptionDiv>
                  </PostFigure>
                );
              })}
        </PostInsideContainer>
        <PostLinkHome to="/">Go back to main page</PostLinkHome>
      </PostContainer>
    </PostSection>
  );
}

export default PostMint