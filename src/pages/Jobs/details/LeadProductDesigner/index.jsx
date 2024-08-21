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

export default function LeadProductDesigner() {
  return (
    <>
      <BackButton />
      <TitleWithApply>lead product designer</TitleWithApply>
      <Subtitle>product & design - remote</Subtitle>
      <Section>
        <Paragraph>
          We are looking for a Lead Product Designer to design, build, and manage a 3D virtual clone
          of the planet Earth, with real-time location sharing between users and social network
          components in the form of a mobile app!
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
          The team you will be joining is not just playing around with social media - we are a team
          of tech, product, art, and design seniors creating technologies to enable innovative
          social experiences that have not existed before. And we are just getting started.
        </Paragraph>
        <Paragraph>
          Creative art and strong visuals, both 2D and 3D, are at the core of our products, gamified
          interactions, and UX
        </Paragraph>
      </Section>

      <Section>
        <Heading>The Role requires:</Heading>
        <UL>
          <LI>10+ years of Products designing end-to-end flows for iOS, Android, and the web.</LI>
          <LI>
            A portfolio of product design work that includes multiple shipped projects where you
            were the primary contributor
          </LI>
          <LI>
            A portfolio of visual design work showing your UX/UI building skills, branding and/or
            illustration, and motion design work
          </LI>
          <LI>
            Proficiency in Figma, Adobe Creative Suite, motion graphic tools (*creative coding is a
            big plus)
          </LI>
          <LI>Experience with accessibility, localization, and internationalization</LI>
          <LI>Experience with planning and managing multidisciplinary design teams.</LI>
          <LI>Experience collaborating with product, design, marketing, and engineering teams.</LI>
        </UL>
      </Section>

      <Section>
        <Heading>Lifeskills:</Heading>
        <UL>
          <LI>Clear, concise verbal and written communication skills</LI>
          <LI>
            Curiosity - being eager to take a road less traveled, own the process, and come up with
            one or more solutions
          </LI>
          <LI>
            Creativity - being creative with both technology *tools and ideas so that the team can
            come up with unique approaches to chart this "new" territory better
          </LI>
          <LI>Strong presentation skills - the ability to influence and move people into action</LI>
          <LI>Ability to collaborate with people from all parts of the world</LI>
        </UL>
      </Section>

      <Section>
        <Heading>Big pluses:</Heading>
        <UL>
          <LI>Experience with Map Products is a plus.</LI>
          <LI>Experience with Web 3 Products is a plus.</LI>
          <LI>Startup experience is always a plus.</LI>
        </UL>
      </Section>

      <Section>
        <Heading>Recruitment process</Heading>
        <OL>
          <LI>A 30-minute call with our People and Culture and Senior Product Manager.</LI>
          <LI>A 30-minute call with our Head of Design.</LI>
        </OL>
      </Section>
    </>
  )
}
