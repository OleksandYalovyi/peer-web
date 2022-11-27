import React from 'react'
import Main from './components/Main'
import ZenProverb from './components/ZenProverb'
import styles from './styles.module.scss'

const Zen = () => (
  <div className={styles.page_container}>
    <Main />
    <ZenProverb />
  </div>
)

export default Zen
