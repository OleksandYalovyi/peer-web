import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import styles from './styles.module.scss'

const Peer = () => (
  <section className={styles.peer}>
    <p className={styles.header}>our vision</p>

    <h2 className={styles.title}>ai for daily life</h2>

    <div className={styles.links}>
      <NavLink to="/" className={styles.link}>
        OUR TEAM
      </NavLink>

      <NavLink to="/" className={classNames(styles.link, styles.large)}>
        WHITE PAPER
      </NavLink>
    </div>
  </section>
)

export default Peer
