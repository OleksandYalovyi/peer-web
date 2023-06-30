import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'
import TextShuffleAnimation from '../TextShuffleAnimation/index'

const Menu = () => (
  <section className={styles.menu}>
    <div className={styles.item}>
      <NavLink to="/">
        <TextShuffleAnimation text="Home" />
      </NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to="/">
        <TextShuffleAnimation text="About" />
      </NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to="/">
        <TextShuffleAnimation text="Products" />
      </NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to="/">
        <TextShuffleAnimation text="Press" />
      </NavLink>
    </div>
  </section>
)

export default Menu
