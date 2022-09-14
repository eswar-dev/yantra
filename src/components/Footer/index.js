import React from 'react'
import './FooterElements';
import { FaPhoneSquareAlt, FaInstagram, FaPaperPlane, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, Copyrights } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialLogo to='/'>Contact Us</SocialLogo>
                <SocialIcons>
                    <SocialIconLink href='/' target='_blank' aria-label="Facebook" rel="noopener noreferrer" >
                        <FaPhoneSquareAlt />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label="Instagram" rel="noopener noreferrer" >
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label="Youtube" rel="noopener noreferrer" >
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label="Twitter" rel="noopener noreferrer" >
                        <FaPaperPlane />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMedia>
            <hr />
            <Copyrights>&#64; 2022 Copyright Yantra2k22.com All Rights Reserved</Copyrights>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer