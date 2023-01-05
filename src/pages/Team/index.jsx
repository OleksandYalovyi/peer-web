import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Main from './components/Main'
import Tony from './components/Tony/index'
import Creators from './components/Creators'
import Projects from './components/Projects'
import styles from './team.module.scss'
import The from './components/The/index'

const Team = () => (
  <section className={styles.page_container}>
    <The />
    <div className={styles.separator} />
    <Main />
    <div className={styles.separator} />
    <Tony />
    <div className={styles.separator} />
    <Creators />
    <div className={styles.separator} />
    <Projects />
    <div className={styles.separator} />
  </section>
)

export default React.memo(Team)

Team.propTypes = {}
