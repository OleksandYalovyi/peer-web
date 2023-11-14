import React from 'react'

import Main from './components/Main'
import VideoSection from './components/VideoSection'
import Creators from './components/Creators'
import styles from './about.module.scss'

const Team = () => (
  <section className={styles.page_container}>
    <Main />
    <VideoSection />
    <Creators />
  </section>
)

export default React.memo(Team)
