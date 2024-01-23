import React, { memo, useRef, useEffect, useCallback, useState } from 'react'
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
  const [linksToShow, setLinksToShow] = useState(links)
  const [toggleIcon, setToggleIcon] = useState(false)

  const setCurrentLinks = () => setLinksToShow(links)
  const closeMenu = () => setIsOpen(false)
  const navItemClickHandler = () => {
    closeMenu()
    setCurrentLinks()
  }

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  const setLinksCallback = useCallback((items) => setLinksToShow(items), [])

  useEffect(() => {
    function handleClickOutside(event) {
      if (event.target.id !== 'togglenav') {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          closeMenu()
          setCurrentLinks()
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  const onClick = (e) => {
    e.stopPropagation()
    if (e.currentTarget.id === 'togglenav') {
      setIsOpen((prev) => !prev)
    }
  }

  const mainNavigate = () => {
    closeMenu()
    setCurrentLinks()
  }

  const handleClickSocial = (e) => {
    const { tagName } = e.target

    if (tagName !== 'DIV') {
      setToggleIcon(!toggleIcon)
    }
  }

  return (
    <div className={styles.wrapper}>
      <BurgerMenu isOpen={isOpen} onClick={onClick} />

      <div className={cls(styles.menu, { [styles.menu_open]: isOpen })} ref={dropdownRef}>
        <div className={styles.menu__content}>
          <NavItems links={linksToShow} setLinks={setLinksCallback} onClick={navItemClickHandler} />
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
