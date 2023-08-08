/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import cls from 'classnames'
import MobileMenuLogo from 'components/Icons/MobileMenuLogo/index'
import useScroll from 'hooks/useScroll'
import useCurrentWidth from 'hooks/useCurrentWidth'
import Logo from 'assets/Home/peerlogo.png'

import styles from './header.module.scss'

const NavItems = ({ name, links, link, openedMenu, clickHandler }) => {
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

const HomeHeader = () => {
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
        {width > 1000 && (
          <div className={styles.left_container}>
            <Link className={styles.logo_container} to="/">
              <img src={Logo} alt="Plus" width={122} />
            </Link>
          </div>
        )}
        <nav className={styles.nav}>
          <NavItems name="HOME" link="/" openedMenu={openedMenu} clickHandler={clickHandler} />
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
            openedMenu={openedMenu}
            clickHandler={clickHandler}
          />

          <NavItems name="PRESS" link="/" openedMenu={openedMenu} clickHandler={clickHandler} />
        </nav>
      </div>
    </header>
  )
}

HomeHeader.propTypes = {}

export default React.memo(HomeHeader)

//
