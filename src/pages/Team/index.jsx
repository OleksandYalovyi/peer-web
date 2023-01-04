import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Main from './components/Main'
import styles from './team.module.scss'

const Team = () => (
  <section className={styles.page_container}>
    <Main />
  </section>
)

export default React.memo(Team)

Team.propTypes = {}
