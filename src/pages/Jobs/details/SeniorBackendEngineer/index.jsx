import React from 'react'

import BackButton from '../components/BackButton/index'
import Title from '../components/Title/index'
import Subtitle from '../components/Subtitle/index'
import Section from '../components/Section/index'
import Paragraph from '../components/Paragraph/index'
import Heading from '../components/Heading/index'
import LI from '../components/LI/index'
import OL from '../components/OL/index'
import UL from '../components/UL/index'

export default function SeniorBackendEngineer() {
  return (
    <>
      <BackButton />
      <Title>senior backend engineer</Title>
      <Subtitle>engineering - remote</Subtitle>
      <Section>
        <Paragraph>
          We seek a{' '}
          <b>
            highly skilled and experienced Senior Backend Expert with a strong background in the Go
            programming language
          </b>
          . As a member of our development team, she/he/they will play a major role in architecting,
          designing, and developing our backend and mobile framework systems.
        </Paragraph>
        <Paragraph>
          Your expertise will be instrumental in shaping the technical direction of our projects,
          mentoring junior developers, and ensuring our applications' scalability, performance, and
          security.
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
          You will be part of the team creating technological solutions to advance the digital
          social space.
        </Paragraph>
      </Section>

      <Section>
        <Heading>The role requires:</Heading>
        <OL>
          <LI>
            Infrastructure Management: Designing, implementing, and maintaining scalable and highly
            available AWS cloud infrastructure. This will include implementing micro-service base
            architecture (GRPC, RedPanda), storage (MongoDB, NeptuneDB, S3..), and security
            configuration.
          </LI>
          <LI>
            Architecture, design, and coding using Go to create, implement, and maintain scalable
            and robust backend systems. Drive the team's adoption of best practices, design
            patterns, and coding standards. Develop APIs, services, and integrations to support
            front-end applications and third-party services
          </LI>
          <LI>
            Performance and Optimization: Identify performance bottlenecks and optimize system
            components for maximum speed and efficiency. Work closely with the DevOps team to deploy
            and manage backend services in production environments.
          </LI>
        </OL>
      </Section>

      <Section>
        <Heading>The candidate profile requirements:</Heading>
        <UL>
          <LI>A bachelorʼs degree in computer science or a related field.</LI>
          <LI>
            7+ years of professional experience in software development, with a focus on backend
            development.
          </LI>
          <LI>
            Strong proficiency in the <b>Go</b> language is essential.
          </LI>
          <LI>
            Solid understanding of cloud technologies and experience deploying applications in cloud
            environments (e.g., AWS, GCP).
          </LI>
          <LI>
            Experience with <b>containerization</b> and <b>orchestration</b> tools like Docker and
            Kubernetes.
          </LI>
          <LI>Experience with Bazel and/or gomobile is a plus.</LI>
          <LI>Excellent communication and social skills.</LI>
        </UL>
      </Section>

      <Section>
        <Heading>Benefits:</Heading>
        <UL>
          <LI>Competitive salary.</LI>
          <LI>Opportunity to work on cutting-edge projects and innovative technologies.</LI>
          <LI>Professional development opportunities and continuous learning</LI>
          <LI>Collaborative and inclusive work culture.</LI>
          <LI>Full remote work.</LI>
        </UL>
      </Section>

      <Section>
        <Heading>Recruitment process</Heading>
        <OL>
          <LI>A 30-minute call with our People and Culture Manager</LI>
          <LI>40-minute technical call with our CTO</LI>
          <LI>30-minute call with our CEO</LI>
        </OL>
      </Section>
    </>
  )
}
