import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'

const Menu = () => (
  <section className={styles.menu}>
    <div className={styles.item}>
      <NavLink to="/">Home</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to="/">About</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to="/">Products</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to="/">Press</NavLink>
    </div>
  </section>
)

export default Menu
