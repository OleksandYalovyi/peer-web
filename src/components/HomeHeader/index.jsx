/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import cls from 'classnames'
import MobileMenuLogo from 'components/Icons/MobileMenuLogo/index'
import useScroll from 'hooks/useScroll'
import useCurrentWidth from 'hooks/useCurrentWidth'
import Plus from 'assets/Home/plus.svg'

import MobileMenu from '../Header/MobileMenu'

import styles from './header.module.scss'

const NavItems = ({ name, links, link }) => {
  const [hovered, setHovered] = useState('')

  return (
    <div className={styles.nav_item}>
      {link ? <NavLink to={link}>{name}</NavLink> : name}
      {links && (
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
                  {name === 'PRODUCTS' && (
                    <MobileMenuLogo type={l.logo} isHovered={hovered === l.logo} />
                  )}
                  {l.name}
                  <span className={styles.desc}>{l.desc}</span>
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
                  {name === 'PRODUCTS' && (
                    <MobileMenuLogo type={l.logo} isHovered={hovered === l.logo} />
                  )}
                  {l.name}
                  <span className={styles.desc}>{l.desc}</span>
                </a>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  )
}

const HomeHeader = () => {
  const width = useCurrentWidth()
  const { scrollDirection } = useScroll()
  const [isMenu, setIsMenuOpen] = useState(false)

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
            <img src={Plus} alt="Plus" width={25} />
          </Link>
        </div>

        {!isMobile && (
          <nav className={styles.nav}>
            <NavItems name="HOME" link="/" />
            <NavItems
              router
              name="ABOUT"
              links={[
                {
                  name: 'Team',
                  to: '/team',
                  router: true,
                },
                {
                  name: 'Brand Book',
                  to: '/brandbook',
                  router: true,
                },
                {
                  name: 'White Papers',
                  to: '/whitepapers',
                  router: true,
                },
              ]}
            />

            <NavItems
              name="PRODUCTS"
              links={[
                { name: 'PEER', desc: 'OPEN WORLD', to: 'https://peerclub.com', logo: 'PEER' },
                { name: 'ZEN', desc: 'WALLET', to: '/placeholder', logo: 'ZEN', router: true },
                { name: 'OMNI', desc: 'EXPLORER', to: 'https://peermultichain.com', logo: 'OMNI' },
                {
                  name: 'PM',
                  desc: 'MARKETPLACE',
                  to: 'https://market.peerclub.com',
                  logo: 'PM',
                },
                {
                  name: 'PEER DOLLAR',
                  desc: 'COIN',
                  to: 'https://market.peerclub.com',
                  logo: 'COIN',
                },
                // { name: 'Index', to: '/placeholder', logo: 'INDEX', router: true },
                // { name: 'Labs', to: 'https://labs.peer.inc', logo: 'LABS' },
              ]}
            />

            <NavItems name="PRESS" link="/" />
          </nav>
        )}
        <div className={styles.right_container}>
          {isMobile && <MobileMenu isMenu={isMenu} setIsMenuOpen={setIsMenuOpen} />}
        </div>
      </div>
    </header>
  )
}

HomeHeader.propTypes = {}

export default React.memo(HomeHeader)

//
