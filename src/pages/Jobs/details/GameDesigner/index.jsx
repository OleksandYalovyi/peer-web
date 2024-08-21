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

export default function GameDesigner() {
  return (
    <>
      <BackButton />
      <TitleWithApply>game designer</TitleWithApply>
      <Subtitle>product & design - remote</Subtitle>

      <Section>
        <Heading>About Peer</Heading>
        <Paragraph>
          Peer builds a gamified social ecosystem on a proprietary, immersive 3D map. The mobile app
          interactions are based on location sharing, and Peer also features a unique marketplace.
          This is just the beginning—the product vision has a broader horizon.
        </Paragraph>
        <Paragraph>
          We are building a meta-world that becomes a literal peer to your real world.
        </Paragraph>
        <Paragraph>
          The team you will be joining is not just playing around with social media - we are a team
          of tech, product, art, and design seniors creating technologies to enable innovative
          social experiences that have not existed before. And we are just getting started.
        </Paragraph>
        <Paragraph>Most of our team are passionate gamers 😎</Paragraph>
        <Paragraph>Come and create the future of social interactions with us.</Paragraph>
      </Section>

      <Section>
        <Heading>About you</Heading>
        <UL>
          <LI>
            You are a gamer with a particular itch to make games big or small. You love game jams
            and can show us some of your game prototypes or indie projects you have created.
          </LI>
          <LI>
            You believe that social interactions can be more rewarding when a simple game mechanic
            keeps people entertained and has them returning for more.
          </LI>
          <LI>
            Coming from a technical or creative background (we do not judge), you are a creative
            problem solver and love working with artists and engineers to create stuff that engage
            people in the digital and real world.
          </LI>
          <LI>
            You worked closely with production to identify, prioritize, assign, and evaluate design
            work.
          </LI>
          <LI>
            You have experience with procedural gameplay mechanics and game design for mobile games.
          </LI>
          <LI>If you worked at a startup or had one of your own, this is an extra 1000 points.</LI>
          <LI>
            Utilize data-driven insights to inform design decisions, adjust live balance in
            real-time, and react quickly to changing project needs, driving effective solutions.
          </LI>
          <LI>
            You have 5+ years of experience in the game designer position and a proven track record
            of successful games and mobile gaming projects with large user pools. You have a zest
            for engaging communities and inserting fun into our everyday lives.
          </LI>
          <LI>
            Experience with multiplayer cooperative games, systems design, experience working with
            custom engines, analytics tools/languages/processes, and visual scripting is another
            1000 points extra.
          </LI>
        </UL>
      </Section>

      <Section>
        <Heading>Roles and Responsibilities</Heading>
        <UL>
          <LI>
            Conceptualize, implement, and maintain gameplay systems that achieve rewarding game
            loops.
          </LI>
          <LI>Create prototypes, design gameplay, features, and other parts of a good game</LI>
          <LI>Research and come up with fresh game ideas to be tested and/or implemented</LI>
          <LI>Create and maintain comprehensive documentation of the gameplay mechanics</LI>
          <LI>
            Work closely with the remote team of UX and UI Designers, Artists, Engineers, and
            Product managers
          </LI>
          <LI>Present concepts and ideas in a clear and inspiring manner</LI>
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
