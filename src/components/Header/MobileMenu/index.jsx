/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Ripples from 'react-ripples'
import cls from 'classnames'
import PropTypes, { bool } from 'prop-types'
import logo from 'assets/images/home/logo.svg'
import TopBtn from 'assets/images/header/topbtn.svg'

import SignUp from 'pages/HomeV2/SignUp'
import burger from 'assets/images/header/burger.svg'
import QA from './QA/index'

import styles from './styles.module.scss'

// eslint-disable-next-line react/prop-types
const Burger = ({ onClick, isMenu }) => (
  <div className={styles.burger_container}>
    <input
      className={cls(isMenu ? styles['menu-trigger-open'] : styles['menu-trigger'], styles.hidden)}
      id="togglenav"
      type="checkbox"
      onClick={onClick}
    />
    <label className={styles['burger-wrapper']} htmlFor="togglenav">
      <div className={styles.hamburger} />
    </label>
  </div>
)

const Header = ({ isMenu, setIsMenuOpen, setIsModalOpen }) => {
  const menuContainerRef = useRef()

  const onClick = (e) => {
    e.stopPropagation()
    if (e.currentTarget.id === 'togglenav') {
      setIsMenuOpen((s) => !s)
    }
  }

  const onSelect = (e) => {
    setIsMenuOpen((s) => !s)
  }

  const onSignIn = () => {
    setIsMenuOpen((s) => !s)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.burger}>
          <Burger onClick={onClick} isMenu={isMenu} />
        </div>
      </div>
      <div
        className={cls(styles.menu_container, { [styles.opened]: isMenu })}
        ref={menuContainerRef}
      >
        <div className={styles.menu_content}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/" className={styles.logo_text} onClick={onSelect}>
            Sign In
          </Link>
          <Link to="/white-paper" className={styles.logo_text} onClick={onSelect}>
            White paper
          </Link>
          <Link to="/updates" className={styles.logo_text} onClick={onSelect}>
            Updates
          </Link>
          <Link to="/" className={styles.logo_text} onClick={onSelect}>
            Contact us
          </Link>
          <div className={cls(styles.logo_text, styles.qa)}>Q&A</div>
        </div>

        <QA />

        <SignUp />

        <button
          className={styles.btn_to_top}
          onClick={() => menuContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={TopBtn} alt="Button to top" />
        </button>
      </div>
    </>
  )
}

Header.propTypes = {
  isMenu: bool,
  setIsMenuOpen: PropTypes.func,
  setIsModalOpen: PropTypes.func,
}

export default React.memo(Header)
