import React from 'react'
import MainContainer from 'components/MainContainer'

import styles from './styles.module.scss'

const About = () => (
  <MainContainer>
    <div className={styles.content}>
      <h1>
        The metaverse has a problem.
        <br />
        <br />
        It doesn’t exist.
        <br />
        <br />
        <br />
        <br />
        The good news is we know why.
      </h1>

      <h2>The metaverse needs an organizing structure.</h2>

      <p>
        Everything in existence requires structure. The internet has structure. The web has
        structure. The computer you’re on...has structure. To make the metaverse real, we’ve
        developed its structure. We’re calling it “Fabric.” It’s a breakthrough foundation for the
        future of computing.
      </p>
    </div>
  </MainContainer>
)

About.propTypes = {}

export default About
