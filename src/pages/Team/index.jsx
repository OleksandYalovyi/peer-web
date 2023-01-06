import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Main from './components/Main'
import VideoSection from './components/VideoSection'
import Creators from './components/Creators'
import Projects from './components/Projects'
import styles from './team.module.scss'

const Team = () => (
  <section className={styles.page_container}>
    <Main />
    <div className={styles.separator} />
    <VideoSection />
    <div className={styles.separator} />
    <Creators />
    <div className={styles.separator} />
    <Projects />
  </section>
)

export default React.memo(Team)

Team.propTypes = {}
