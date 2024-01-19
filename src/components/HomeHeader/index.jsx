/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import cls from 'classnames'
import useScroll from 'hooks/useScroll'
import peerLogo from 'assets/Home/peerlogo.png'
import styles from './header.module.scss'

const links = [
  {
    id: 1,
    router: true,
    name: 'HOME',
    to: '/home',
  },
  {
    id: 2,
    router: true,
    name: 'ABOUT',
    to: '/about',
  },
  {
    id: 3,
    router: true,
    name: 'TEAM',
    to: '/team',
  },
  {
    id: 4,
    router: true,
    name: 'CAREERS',
    to: '/careers',
  },
  {
    id: 5,
    router: true,
    name: 'PRESS',
    to: '/press',
  },
]

function NavItems({ name, link, openedMenu, clickHandler }) {
  const [hovered, setHovered] = useState('')

  return (
    <div
      className={cls(styles.nav_item, { [styles.open]: openedMenu === name })}
      onClick={() => clickHandler(name)}
    >
      {link ? <NavLink to={link}>{name}</NavLink> : name}
      {/* {links && (
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
      )} */}
    </div>
  )
}

function HomeHeader() {
  const { scrollDirection } = useScroll()
  // const [isMenu, setIsMenuOpen] = useState(false)
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
      ref={ref}
    >
      <div className={styles.main_container}>
        <div className={styles.left_container}>
          <Link className={styles.logo_container} to="/">
            <img src={peerLogo} alt="peer logo" className={styles.peerLogo} />
          </Link>
        </div>
        <nav className={styles.nav}>
          {links.map(({ router, name, to, id }) => (
            <NavItems
              key={id}
              router={router}
              name={name}
              link={to}
              openedMenu={openedMenu}
              clickHandler={clickHandler}
            />
          ))}
        </nav>
      </div>
    </header>
  )
}

HomeHeader.propTypes = {}

export default React.memo(HomeHeader)
