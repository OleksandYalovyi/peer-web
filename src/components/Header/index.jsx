/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import cls from 'classnames'
import useScroll from 'hooks/useScroll'
import { useTheme } from 'context/theme'
import useCurrentWidth from 'hooks/useCurrentWidth'
import MobileMenuLogo from 'components/Icons/MobileMenuLogo/index'
import Logo from '../Icons/PEERStarLogo'

import styles from './header.module.scss'

function NavItems({ name, links }) {
  const [hovered, setHovered] = useState('')

  return (
    <div className={styles.nav_item}>
      {name}
      <div className={styles.nav_list}>
        {links.map((l) => (
          <>
            {l.router ? (
              <NavLink
                to={l.to}
                className={styles.link}
                onMouseEnter={() => setHovered(l.logo)}
                onMouseLeave={() => setHovered('')}
              >
                {name === 'Products' && (
                  <MobileMenuLogo type={l.logo} isHovered={hovered === l.logo} />
                )}
                {l.name}
              </NavLink>
            ) : (
              <a
                href={l.to}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
                onMouseEnter={() => setHovered(l.logo)}
                onMouseLeave={() => setHovered('')}
              >
                {name === 'Products' && (
                  <MobileMenuLogo type={l.logo} isHovered={hovered === l.logo} />
                )}
                {l.name}
              </a>
            )}
          </>
        ))}
      </div>
    </div>
  )
}

function LandingHeader() {
  const { width } = useCurrentWidth()
  const { scrollDirection } = useScroll()
  // const [isMenu, setIsMenuOpen] = useState(false)

  const { isLight, switchTheme } = useTheme()
  // const { pathname } = useLocation()

  const isMobile = width < 681
  return (
    <header
      className={cls(
        styles.container,
        {
          [styles.hidden]:
            scrollDirection === 'down' && scrollDirection !== 'bottom' && scrollDirection !== 'top',
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
              name="Community"
              links={[
                { name: 'Peer Community', to: 'placeholder', router: true },
                { name: 'Docs', to: 'placeholder', router: true },
              ]}
            />
            <NavItems
              name="Products"
              links={[
                { name: 'PEER', desc: 'OPEN WORLD', to: 'https://peerclub.com', logo: 'PEER' },
                { name: 'ZEN', desc: 'WALLET', to: '/placeholder', logo: 'ZEN', router: true },
                { name: 'OMNI', desc: 'EXPLORER', to: '/placeholder', logo: 'OMNI', router: true },
                {
                  name: 'PM',
                  desc: 'MARKETPLACE',
                  to: '/placeholder',
                  logo: 'PM',
                  router: true,
                },
                {
                  name: 'PEER DOLLAR',
                  desc: 'COIN',
                  to: '/placeholder',
                  logo: 'COIN',
                  router: true,
                },
              ]}
              // links={[
              //   { name: 'Peer', to: 'https://peerclub.com', logo: 'PEER' },
              //   { name: 'Zen', to: '/placeholder', logo: 'ZEN', router: true },
              //   { name: 'Omni', to: 'https://peermultichain.com', logo: 'OMNI' },
              //   { name: 'Index', to: '/placeholder', logo: 'INDEX', router: true },
              //   { name: 'Labs', to: 'https://labs.peer.inc', logo: 'LABS' },
              // ]}
            />
            <NavItems
              router
              name="About"
              links={[
                {
                  name: 'About',
                  to: '/about',
                  router: true,
                },
                {
                  name: 'Brand Book',
                  to: '/placeholder',
                  router: true,
                },
                {
                  name: 'White Papers',
                  to: '/placeholder',
                  router: true,
                },
              ]}
            />
          </nav>
        )}
        <div className={styles.right_container}>
          {/* {!isMobile && (
            <>
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
            </>
          )} */}
          {/* {isMobile && <MobileMenu isMenu={isMenu} setIsMenuOpen={setIsMenuOpen} />} */}
        </div>
      </div>
    </header>
  )
}

LandingHeader.propTypes = {}

export default React.memo(LandingHeader)
