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

export default function SeniorWebDeveloper() {
  return (
    <>
      <BackButton />
      <TitleWithApply>Senior web developer</TitleWithApply>
      <Subtitle>Engineering - remote</Subtitle>
      <Section>
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
      </Section>
      <Section>
        <Heading>About You</Heading>
        <Paragraph>
          We are seeking a highly skilled and experienced Full Stack Web Development candidate with
          a strong background in frontend (React framework) and backend programming. You will play a
          pivotal role in architecting, designing, and leading the development of our web frontend
          and backend systems. Your expertise will be instrumental in shaping the technical
          direction of our projects, mentoring junior developers, and ensuring the highest level of
          user experience, stability, performance, and security of our websites.
        </Paragraph>
        <Paragraph>
          You will manage and drive the development of our web-based projects in conjunction with
          Peer Mobile App teams and Peer Contractors to meet the company's specific directives and
          roadmap.
        </Paragraph>
      </Section>

      <Section>
        <Heading>The role requires:</Heading>
        <OL>
          <LI>
            Development: Hands-on development of new user-facing features using React.js. This
            includes:
            <OL type="a">
              <LI>Building reusable components and front-end libraries for future use;</LI>
              <LI>Translating designs and wireframes into high-quality code;</LI>
              <LI>
                Optimizing components for maximum performance across various web- capable devices
                and browsers.
              </LI>
            </OL>
          </LI>
          <LI>
            Technical Leadership: Oversee the effort and provide technical leadership and guidance
            to a team of front-end and back-end developers. Collaborate with cross-functional teams
            to define technical requirements, architecture, and design for front-end and back-end
            code and infrastructure.
          </LI>
          <LI>
            Architecture, Design, and Coding: Maintaining existing systems and driving the team's
            adoption of best practices, design patterns, and coding standards. Architect APIs,
            services, and integrations to support front-end applications and third-party services in
            collaboration with the backend team.
          </LI>
          <LI>
            Performance and Optimisation: Identify performance bottlenecks and optimize system
            components for maximum speed and efficiency. Work with the DevOps team to deploy and
            manage backend services in production environments and create a robust, fault-tolerant
            CI / CD pipeline
          </LI>
        </OL>
      </Section>

      <Section>
        <Heading>The candidate profile requirements:</Heading>
        <UL>
          <LI>A bachelorʼs degree in computer science or a related field.</LI>
          <LI>
            7+ years of professional experience in software development, focusing on frontend and
            backend web development.
          </LI>
          <LI>
            Proficiency in React is essential as knowledge of one or more backend programming
            languages (the backend is written in Ruby, and the app backend is in Go)
          </LI>
          <LI>2+ years experience leading a team.</LI>
          <LI>
            Solid understanding of cloud technologies and experience deploying web projects in cloud
            environments (e.g., AWS, GCP).
          </LI>
          <LI>Experience with web3 is a strong plus.</LI>
          <LI>
            Flexibility to work with a team from different cultures (mainly EU, UK, and UAE
            timezones)
          </LI>
          <LI>Excellent communication and teamwork skills.</LI>
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
    </>
  )
}
