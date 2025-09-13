import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Aspiring Full-Stack Developer at the University of Houston | Passionate About Creating Scalable Web Applications Using the MERN Stack (MongoDB, Express, React, Node.js) | Skilled in API Integration, Database Management, and Problem-Solving with Data Structures
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/yourprofile/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;