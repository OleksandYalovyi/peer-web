/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import cls from 'classnames'
import useScroll from 'hooks/useScroll'
import peerLogo from 'assets/PeerLogo.svg'

import styles from './header.module.scss'
import GetButton from './components/GetButton'
import useCurrentSize from '../../../hooks/useCurrentSize'
import MobileMenu from './components/MobileMenu'
import links from '../header.utils'

function NavItems({ name, link, openedMenu, clickHandler }) {
  return (
    <div
      className={cls(styles.nav_item, { [styles.open]: openedMenu === name })}
      onClick={() => clickHandler(name)}
    >
      {link ? <NavLink to={link}>{name}</NavLink> : name}
    </div>
  )
}

function MainHeader() {
  const { scrollDirection } = useScroll()
  const [openedMenu, setIsOpen] = useState('')
  const ref = useRef('')
  const { width } = useCurrentSize()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const isMobile = width < 680

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
        <div className={styles.main_container__left}>
          <Link to="/">
            <img src={peerLogo} alt="peer logo" className={styles.peerLogo} />
          </Link>
        </div>
        <div className={styles.main_container__right}>
          {!isMobile && (
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
          )}

          <div className={styles.get_peer_wrapper}>
            <GetButton label="get peer" />

            {isMobile && <MobileMenu isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} />}
          </div>
        </div>
      </div>
    </header>
  )
}

MainHeader.propTypes = {}

export default React.memo(MainHeader)
