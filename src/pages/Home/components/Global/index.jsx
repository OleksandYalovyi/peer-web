import React from 'react'
import { NavLink } from 'react-router-dom'
import PeerLogoGlobal from 'assets/Home/peerlogoglobal.svg'
import styles from './styles.module.scss'

const Global = () => (
  <section className={styles.global}>
    <NavLink to="/" className={styles.link}>
      <img src={PeerLogoGlobal} alt="Peer" />
    </NavLink>
  </section>
)

export default Global
