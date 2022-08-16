import Animated from 'components/Animated/index'
import React from 'react'
import styles from './styles.module.scss'
import PlayToLive from './PlayToLive/index'
import Hero from './Hero'
import Disclaimer from './Disclaimer'

const Home = () => (
  <div className={styles.container}>
    <Animated>
      <Hero />
    </Animated>
    <Animated>
      <Disclaimer />
    </Animated>
    <Animated>
      <PlayToLive />
    </Animated>
  </div>
)

export default Home
