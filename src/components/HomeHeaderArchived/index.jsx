/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import cls from 'classnames'
import MobileMenuLogo from 'components/Icons/MobileMenuLogo/index'
import useScroll from 'hooks/useScroll'
import useCurrentWidth from 'hooks/useCurrentWidth'

import PEERStarLogo from 'components/Icons/PEERStarLogo/index'
import MobileMenu from 'components/Header/MobileMenu/index'
import styles from './header.module.scss'

function NavItems({ name, links, link, openedMenu, clickHandler }) {
  const [hovered, setHovered] = useState('')

  return (
    <div
      className={cls(styles.nav_item, { [styles.open]: openedMenu === name })}
      onClick={() => clickHandler(name)}
    >
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

function HomeHeader() {
  const width = useCurrentWidth()
  const { scrollDirection } = useScroll()
  const [isMenu, setIsMenuOpen] = useState(false)
  const [openedMenu, setIsOpen] = useState('')
  const ref = useRef('')

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen('')
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })

  const clickHandler = (itemName) => (openedMenu === itemName ? setIsOpen('') : setIsOpen(itemName))

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
      ref={ref}
    >
      <div className={styles.main_container}>
        <div className={styles.left_container}>
          <Link className={styles.logo_container} to="/">
            <PEERStarLogo />
            <NavItems name="ABOUT" link="/" openedMenu={openedMenu} clickHandler={clickHandler} />
          </Link>
        </div>
        {!isMobile ? (
          <nav className={styles.nav}>
            <NavItems
              router
              name="ABOUT"
              link="/about"
              openedMenu={openedMenu}
              clickHandler={clickHandler}
            />
            <NavItems
              router
              name="ABOUT"
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
              openedMenu={openedMenu}
              clickHandler={clickHandler}
            />

            <NavItems
              name="PRODUCTS"
              links={[
                { name: 'PEER', desc: 'OPEN WORLD', to: 'https://peerclub.com', logo: 'PEER' },
                { name: 'ZEN', desc: 'WALLET', to: '/placeholder', logo: 'ZEN', router: true },
                { name: 'OMNI', desc: 'EXPLORER', to: '/placeholder', logo: 'OMNI', router: true },
                {
                  name: 'PM',
                  desc: 'MARKETPLACE',
                  to: 'https://market.peerclub.com',
                  logo: 'PM',
                },
                {
                  name: 'PEER DOLLAR',
                  desc: 'COIN',
                  to: '/placeholder',
                  logo: 'COIN',
                  router: true,
                },
              ]}
              openedMenu={openedMenu}
              clickHandler={clickHandler}
            />

            <NavItems
              name="PRESS"
              link="/placeholder"
              openedMenu={openedMenu}
              clickHandler={clickHandler}
            />
          </nav>
        ) : (
          <MobileMenu isMenu={isMenu} setIsMenuOpen={setIsMenuOpen} />
        )}
      </div>
    </header>
  )
}

HomeHeader.propTypes = {}

export default React.memo(HomeHeader)

//
