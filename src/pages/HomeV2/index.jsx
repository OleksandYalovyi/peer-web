import Animated from 'components/Animated/index'
import React from 'react'
import styles from './styles.module.scss'
import PlayToLive from './PlayToLive/index'

const Home = () => (
  <div className={styles.container}>
    <Animated>
      <PlayToLive />
    </Animated>
  </div>
)

export default Home
