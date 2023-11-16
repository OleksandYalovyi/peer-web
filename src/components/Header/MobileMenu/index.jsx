/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef } from 'react'
import cls from 'classnames'
import T from 'prop-types'
import Dropdown from './components/accordion/index'

import styles from './styles.module.scss'

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

const Header = ({ isMenu, setIsMenuOpen }) => {
  const menuContainerRef = useRef()

  const onClick = (e) => {
    e.stopPropagation()
    if (e.currentTarget.id === 'togglenav') {
      setIsMenuOpen((s) => !s)
    }
  }

  useEffect(() => {
    // menuContainerRef.current.scrollTo({ top: 0 })
  })

  return (
    <Dropdown isShow={isMenu} onClose={() => setIsMenuOpen(false)} burgerRef={menuContainerRef}>
      <div className={styles.burger} ref={menuContainerRef}>
        <Burger onClick={onClick} isMenu={isMenu} />
      </div>
    </Dropdown>
  )
}

Burger.propTypes = {
  isMenu: T.bool,
  onClick: T.func,
}

Header.propTypes = {
  isMenu: T.bool,
  setIsMenuOpen: T.func,
}

export default React.memo(Header)
