import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import DropDown from '../Components/DropDownFAQ';
import Footer from '../Components/Footer';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from '../Components/InfoSection/Data';
import Specification from '../Components/Specification';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Specification />
      <DropDown />
      <Footer />
    </>
  );
};

export default Home;
