import React from 'react'
import { NavLink } from 'react-router-dom'
import arrowLeft from 'assets/images/home/arrow.svg'
import styles from './styles.module.scss'

const WhitePaper = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <NavLink to="/" className={styles.link}>
        <img src={arrowLeft} alt="arrow" />
        back
      </NavLink>
      <span className={styles.text}>White Paper</span>
    </div>

    <div className={styles.title}>
      A Metaverse for <br />
      the Real World
    </div>

    <div className={styles.content}>Coming soon...</div>
  </div>
)

export default WhitePaper
