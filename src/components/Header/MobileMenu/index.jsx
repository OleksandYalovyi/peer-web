import React, { memo, useRef, useEffect, useCallback } from 'react'
import cls from 'classnames'

import PropTypes from 'prop-types'
import BurgerMenu from './components/BurgerMenu'
import NavItems from './components/NavItems'

import styles from './styles.module.scss'
import links from '../header.utils'
import HomeFooter from '../../Footer/HomeFooter'
import Dropdown from '../MainHeader/components/Dropdown'

function MobileMenu({ isOpen, setIsOpen, language, setLanguage, languageOptions }) {
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
        <div className={styles.menu__content}>
          <NavItems links={links} onClick={closeMenu} />
          <div className={styles.dropdown_wrapper}>
            <Dropdown value={language} options={languageOptions} onChange={setLanguage} />
          </div>
        </div>

        <HomeFooter />
      </div>
    </div>
  )
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  language: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
    icon: PropTypes.element,
  }),
  setLanguage: PropTypes.func,
  languageOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      icon: PropTypes.element,
    }),
  ),
}

export default memo(MobileMenu)
