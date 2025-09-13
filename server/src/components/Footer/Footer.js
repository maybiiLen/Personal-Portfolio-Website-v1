import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:your-email@example.com">hqpham8@cougarnet.uh.edu</LinkItem>
          <LinkItem href="tel:+1234567890">+1 (832) 279-7385</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        </CompanyContainer>
      <SocialIcons href="https://github.com/maybiiLen">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/henry-pham-561ba0262/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/lmao.henry/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      </SocialIconsContainer>
      <Slogan>
        <p>© 2025 Henry Pham. All rights reserved.</p>
      </Slogan>
    </FooterWrapper>
  );
};

export default Footer;
