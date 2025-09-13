import React from 'react'
import { Section, SectionTitle, SectionText, SectionSubText } from '../../styles/GlobalComponents'

const Eduction = () => {
  return (
    <Section id="eduction">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img src="/images/uhlogo.png" alt="University of Houston logo" style={{ width: 48, height: 48, objectFit: 'contain' }} />
        <SectionTitle style={{ fontSize: '32px', lineHeight: '40px', padding: '8px 0', margin: 0 }}>Eduction</SectionTitle>
      </div>
      <div style={{ maxWidth: '720px' }}>
        <SectionText>
          Pursuing a Bachelor of Science in Computer Science at the University of Houston. Relevant coursework includes Data Structures and Programming, Computer Organization and Assembly Language, and Object-Oriented Programming.
        </SectionText>
        <SectionSubText>Expected graduation: May 2028</SectionSubText>
      </div>
    </Section>
  )
}

export default Eduction