import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements';

const Hero = () => {

  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };

  return (
    <div>
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
              <HeroItems>
                <HeroH1>Man made by Mechanism. World ruled by Mechanicals</HeroH1>
                <HeroBtn>View More!!</HeroBtn>
              </HeroItems>
            </HeroContent>
        </HeroContainer>
    </div>
  )
}

export default Hero