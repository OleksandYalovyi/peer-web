/* eslint-disable react/prop-types */
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

const NavItems = ({ router, name, links }) => (
  <div className={styles.nav_item}>
    {name}
    <div className={styles.nav_list}>
      {router
        ? links.map((l) => <NavLink to={l.to}>{l.name}</NavLink>)
        : links.map((l) => (
            <a href={l.to} target="_blank" rel="noreferrer">
              {l.name}
            </a>
          ))}
    </div>
  </div>
)

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
        <nav className={styles.nav}>
          <NavItems
            router
            name="Community"
            links={[
              {
                name: 'Social',
                to: '/social',
              },
              {
                name: 'Development',
                to: '/development',
              },
              {
                name: 'White Papers',
                to: '/white_papers',
              },
            ]}
          />
          <NavItems
            router={false}
            name="Products"
            links={[
              {
                name: 'Peer Superapp',
                to: 'peersuperapp',
              },
              {
                name: 'Peer Blockchain',
                to: 'peerblockchain',
              },
              {
                name: 'Peer Labs',
                to: 'peerlabs',
              },
              {
                name: 'White Paper',
                to: 'whitepaper',
              },
              {
                name: 'AR Studios',
                to: 'arstudios',
              },
            ]}
          />
          <NavItems
            router
            name="About"
            links={[
              {
                name: 'Team',
                to: '/team',
              },
              {
                name: 'Brand Book',
                to: '/brandbook',
              },
              {
                name: 'White Papers',
                to: '/whitepapers',
              },
            ]}
          />
        </nav>
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
