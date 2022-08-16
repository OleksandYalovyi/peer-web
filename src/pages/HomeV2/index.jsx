import Animated from 'components/Animated/index'
import React from 'react'
import styles from './styles.module.scss'
import PlayToLive from './PlayToLive/index'
import Hero from './Hero'

const Home = () => (
  <div className={styles.container}>
    <Animated>
      <Hero />
    </Animated>
    <Animated>
      <PlayToLive />
    </Animated>
  </div>
)

export default Home
