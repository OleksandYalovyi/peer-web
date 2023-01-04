import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Main from './components/Main'
import Tony from './components/Tony/index'
import Creators from './components/Creators/index'
import styles from './team.module.scss'

const Team = () => (
  <section className={styles.page_container}>
    <Main />
    <div className={styles.separator} />
    <Tony />
    <div className={styles.separator} />
    <Creators />
    <div className={styles.separator} />
  </section>
)

export default React.memo(Team)

Team.propTypes = {}
