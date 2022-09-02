/* eslint-disable react/button-has-type */
import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import arrowLeft from 'assets/images/home/arrow.svg'
import SignUp from 'pages/HomeV2/SignUp'
import TopBtn from 'assets/images/header/topbtn.svg'
import List from './List'

import styles from './styles.module.scss'

const Updates = () => {
  const menuContainerRef = useRef()
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NavLink to="/" className={styles.link}>
          <img src={arrowLeft} alt="arrow" />
          back
        </NavLink>
        <span className={styles.text} />
      </div>

      <div className={styles.title}>Updates</div>

      <div className={styles.content}>
        <List />
      </div>
      <SignUp />

      <button
        className={styles.btn_to_top}
        onClick={() => menuContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img src={TopBtn} alt="Button to top" />
      </button>
    </div>
  )
}

export default Updates
