import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'
import TextShuffleAnimation from '../TextShuffleAnimation/index'

const Menu = () => (
  <section className={styles.menu}>
    <div className={styles.item}>
      <NavLink to="/">
        <TextShuffleAnimation text="Home" onMouseEnterStatus={false} />
      </NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to="/">
        <TextShuffleAnimation text="About" onMouseEnterStatus={false} />
      </NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to="/">
        <TextShuffleAnimation text="Products" onMouseEnterStatus={false} />
      </NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to="/">
        <TextShuffleAnimation text="Press" onMouseEnterStatus={false} />
      </NavLink>
    </div>
  </section>
)

export default Menu
