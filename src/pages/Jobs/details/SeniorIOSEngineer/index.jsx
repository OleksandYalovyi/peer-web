import React from 'react'

import BackButton from '../components/BackButton/index'
import TitleWithApply from '../components/TitleWithApply/index'
import Subtitle from '../components/Subtitle/index'
import Section from '../components/Section/index'
import Paragraph from '../components/Paragraph/index'
import Heading from '../components/Heading/index'
import LI from '../components/LI/index'
import OL from '../components/OL/index'
import UL from '../components/UL/index'

export default function SeniorIOSEngineer() {
  return (
    <>
      <BackButton />
      <TitleWithApply>senior ios engineer</TitleWithApply>
      <Subtitle>engineering - remote</Subtitle>
      <Section>
        <Heading>Create UI solutions advancing the digital social space</Heading>
        <Paragraph>
          We seek a highly skilled Senior iOS Engineer with a background in software engineering and
          strong experience building highly performant mobile and/or mobile game applications for
          large audiences.
        </Paragraph>
        <Paragraph>
          You have excellent UI skills and can execute challenging pixel-perfect integrations of
          designs and transitions.
        </Paragraph>
      </Section>
      <Section>
        <Heading>About Peer</Heading>
        <Paragraph>
          Peer builds a gamified social ecosystem on a proprietary, immersive 3D map. It consists of
          a mobile app and a web marketplace, and interactions are based on location sharing. This
          is just the beginning—the product vision has a broader horizon.
        </Paragraph>
        <Paragraph>
          We are building a meta-world that becomes a literal peer to your real world.
        </Paragraph>
        <Paragraph>
          We are a team of tech, product, art, and design seniors creating technologies to enable
          innovative social experiences that have not existed before
        </Paragraph>
        <Paragraph>
          You should deeply understand iOS development and have a creative mindset to deliver
          immersive and enjoyable user experiences. This role requires working with cross-functional
          teams to deliver a product that meets user needs and business objectives.
        </Paragraph>
        <Paragraph>
          Join the team in creating UI solutions to advance the digital social space.
        </Paragraph>
      </Section>

      <Section>
        <Heading>Role requirements</Heading>
        <UL>
          <LI>
            Technical skills: Proficiency in Swift, Objective-C, and the iOS SDK, with a good
            understanding of mobile app architecture and design patterns.
          </LI>
          <LI>
            Experience: 7+ years of professional experience in iOS development and a proven track
            record of delivering high-quality iOS applications.
          </LI>
          <LI>A vision for how great UI can enhance digital social experiences</LI>
          <LI>
            Cross-functional collaboration: Work closely with design, engineering, and QA teams to
            ensure the product is developed according to specifications and meets quality standards.
          </LI>
          <LI>
            UI is vital: Champion an exceptional user experience, ensuring the app features are
            user-friendly, accessible, and meeting design standards.
          </LI>
          <LI>
            Communication: Excellent communication skills and the ability to collaborate effectively
            in an agile team environment.
          </LI>
          <LI>Startup experience is always a plus</LI>
        </UL>
      </Section>

      <Section>
        <Heading>Technical stack</Heading>
        <UL>
          <LI>
            Swift & Objective-C. The Objective-C is only used to interface our app with Go Mobile
            framework.
          </LI>
          <LI>UIKit</LI>
          <LI>Combine</LI>
          <LI>Swift concurrency</LI>
          <LI>SpriteKit for some animations</LI>
        </UL>
      </Section>

      <Section>
        <Heading>Benefits</Heading>
        <UL>
          <LI>Competitive salary.</LI>
          <LI>Opportunity to work on cutting-edge projects and innovative technologies.</LI>
          <LI>Professional development opportunities and continuous learning.</LI>
          <LI>Collaborative and inclusive work culture.</LI>
          <LI>Full remote work.</LI>
        </UL>
      </Section>

      <Section>
        <Heading>Recruitment process</Heading>
        <OL>
          <LI>A 30-minute call with our People and Culture Manager</LI>
          <LI>2&times; 60min technical interviews</LI>
        </OL>
      </Section>
    </>
  )
}
