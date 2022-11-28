import React from 'react'
import Main from './components/Main'
import ZenProverb from './components/ZenProverb'
import Features from './components/Features'
import styles from './styles.module.scss'

const Zen = () => (
  <div className={styles.page_container}>
    <Main />
    <ZenProverb />
    <Features />
  </div>
)

export default Zen
