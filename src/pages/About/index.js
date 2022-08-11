import React, { useState, useEffect } from 'react'
import MainContainer from 'components/MainContainer'
import useScroll from 'hooks/useScroll'
import Animated from 'components/Animated'
import Epic from './components/Epic'

import styles from './styles.module.scss'

const About = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    if (!isScrolled && scrollY > 0) setIsScrolled(true)
  }, [scrollY])

  // console.log({ scrollY, isScrolled })

  return (
    <MainContainer>
      <div className={styles.content}>
        <Animated>
          <Epic />
        </Animated>
        <div style={{ height: 1500 }} />

        {isScrolled && (
          <>
            <div className={styles.title}>
              <Animated>The metaverse needs an organizing structure.</Animated>
            </div>
            <Animated>
              <p>
                Everything in existence requires structure. The internet has structure. The web has
                structure. The computer you’re on...has structure. To make the metaverse real, we’ve
                developed its structure. We’re calling it “Fabric.” It’s a breakthrough foundation
                for the future of computing.
              </p>
            </Animated>
          </>
        )}
      </div>
    </MainContainer>
  )
}

About.propTypes = {}

export default About
