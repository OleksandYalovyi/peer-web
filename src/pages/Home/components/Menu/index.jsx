import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'

const Menu = () => (
  <section className={styles.menu}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/">About</NavLink>
    <NavLink to="/">Products</NavLink>
    <NavLink to="/">Press</NavLink>
  </section>
)

export default Menu
