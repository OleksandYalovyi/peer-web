import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import styles from './styles.module.scss'

const Peer = () => (
  <section className={styles.peer}>
    <h2 className={styles.title}>
      peer is building towards
      <br />
      and accelerating an
      <br /> ai-infused spatial future
    </h2>

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
