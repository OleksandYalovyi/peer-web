/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { NavLink, useLocation, Link } from 'react-router-dom'
import cls from 'classnames'
import useScroll from 'hooks/useScroll'
// import ReactCountryFlag from 'react-country-flag'
import { US } from 'country-flag-icons/react/3x2'
import { useTheme } from 'context/theme'
import useCurrentWidth from 'hooks/useCurrentWidth'
import Dropdown from 'components/Dropdown/index'
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
  const width = useCurrentWidth()
  const { scrollDirection } = useScroll()
  const [isMenu, setIsMenuOpen] = useState(false)
  const [hovered, setHovered] = useState('')

  const { isLight, switchTheme } = useTheme()
  const { pathname } = useLocation()

  const isMobile = width < 681
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
            <Logo isLight={isLight} width={isMobile ? 90.66 : 114} />
          </Link>
        </div>

        {!isMobile && (
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
                { name: 'Zen', to: 'peersuperapp' },
                { name: 'Peer', to: 'peerblockchain' },
                { name: 'ICX', to: 'https://icx.peer.inc' },
                { name: 'Peer Blockchain', to: 'https://explorer.peer.inc' },
                { name: 'Peer Labs', to: 'peerlabs' },
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
        )}
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
          {!isMobile && (
            <Dropdown
              list={{
                type: 'countries',
                data: [
                  {
                    text: 'English (US)',
                    onClick: () => {},
                  },
                  {
                    text: 'Français',
                    onClick: () => {},
                  },
                  {
                    text: 'Español',
                    onClick: () => {},
                  },
                  {
                    text: '简体中文',
                    onClick: () => {},
                  },
                  {
                    text: 'Русский',
                    onClick: () => {},
                  },
                  {
                    text: '한국인',
                    onClick: () => {},
                  },
                  {
                    text: 'Tiếng Việt',
                    onClick: () => {},
                  },
                ],
              }}
            >
              <div className={styles.flag_button}>
                <div className={styles.flag_icon}>
                  <US title="United States" className={styles.icon} />
                </div>
              </div>
            </Dropdown>
          )}
          {isMobile && <MobileMenu isMenu={isMenu} setIsMenuOpen={setIsMenuOpen} />}
        </div>
      </div>
    </header>
  )
}

LandingHeader.propTypes = {}

export default React.memo(LandingHeader)
