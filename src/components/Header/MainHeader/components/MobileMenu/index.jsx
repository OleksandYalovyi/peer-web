import React, { memo, useRef, useEffect, useCallback } from 'react'
import cls from 'classnames'

import PropTypes from 'prop-types'
import BurgerMenu from './components/BurgerMenu'
import NavItems from './components/NavItems'

import styles from './styles.module.scss'
import links from '../../../header.utils'
import HomeFooter from '../../../../Footer/HomeFooter'

function MobileMenu({ isOpen, setIsOpen }) {
  const dropdownRef = useRef(null)

  const closeMenu = useCallback(() => setIsOpen(false), [setIsOpen])

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  const onClick = (e) => {
    e.stopPropagation()
    if (e.currentTarget.id === 'togglenav') {
      setIsOpen((prev) => !prev)
    }
  }

  return (
    <div className={styles.wrapper}>
      <BurgerMenu isOpen={isOpen} onClick={onClick} />

      <div className={cls(styles.menu, { [styles.menu_open]: isOpen })} ref={dropdownRef}>
        <NavItems links={links} onClick={closeMenu} />

        <HomeFooter />
      </div>
    </div>
  )
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
}

export default memo(MobileMenu)
