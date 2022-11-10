import React, { useState } from 'react'
import { NavLink, useLocation, Link } from 'react-router-dom'
import cls from 'classnames'
import useScroll from 'hooks/useScroll'
// import ReactCountryFlag from 'react-country-flag'
import { US } from 'country-flag-icons/react/3x2'
import { useTheme } from 'context/theme'
import Logo from '../Icons/Logo'
import ArrowDown from '../Icons/ArrowDown'
import ThemeSelector from '../Icons/Theme'
import MobileMenu from './MobileMenu'

import styles from './header.module.scss'

const LandingHeader = () => {
  const { scrollDirection } = useScroll()
  const [isMenu, setIsMenuOpen] = useState(false)
  const [hovered, setHovered] = useState('')

  const { isLight, switchTheme } = useTheme()
  const { pathname } = useLocation()

  return (
    <header
      className={cls(
        styles.container,
        {
          [styles.hidden]:
            scrollDirection === 'down' &&
            scrollDirection !== 'bottom' &&
            scrollDirection !== 'top' &&
            !isMenu,
        },
        {
          [styles.bg]: scrollDirection === 'up' || scrollDirection === 'bottom',
        },
      )}
    >
      <div className={styles.main_container}>
        <div className={styles.left_container}>
          <Link className={styles.logo_container} to="/">
            <Logo isLight={isLight} />
          </Link>
        </div>
        <div className={styles.right_container}>
          <NavLink
            to="/"
            className={cls(styles.text_link, {
              // [styles.active]: pathname === '/' && !hovered,
            })}
            onMouseEnter={() => setHovered('signin')}
            onMouseLeave={() => setHovered('')}
          >
            Sign In
          </NavLink>
        </div>
        {/* <MobileMenu isMenu={isMenu} setIsMenuOpen={setIsMenuOpen} /> */}
      </div>
    </header>
  )
}

LandingHeader.propTypes = {}

export default React.memo(LandingHeader)
