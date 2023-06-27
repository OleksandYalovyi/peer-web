import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'

const Involved = () => (
  <section className={styles.involved}>
    <h2 className={styles.title}>want to get involved?</h2>

    <NavLink to="/" className={styles.link}>
      Join the community
    </NavLink>
  </section>
)

export default Involved
