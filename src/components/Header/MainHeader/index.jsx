/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import cls from 'classnames'
import { US } from 'country-flag-icons/react/3x2'
import useScroll from 'hooks/useScroll'
import peerLogo from 'assets/PeerLogo.svg'

import styles from './header.module.scss'
import Dropdown from './components/Dropdown'
import GetButton from './components/GetButton'
import useCurrentWidth from '../../../hooks/useCurrentWidth'
import MobileMenu from '../MobileMenu'
import links from '../header.utils'

const languageOptions = [
  {
    label: 'EN',
    value: 'EN',
    icon: <US width={15} title="United States" />,
  },
]

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
  const [language, setLanguage] = useState(languageOptions[0])
  const width = useCurrentWidth()
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
            <>
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

              <Dropdown value={language} options={languageOptions} onChange={setLanguage} />
            </>
          )}

          <div className={styles.get_peer_wrapper}>
            <GetButton label="get peer" />

            {isMobile && (
              <MobileMenu
                isOpen={isMobileOpen}
                setIsOpen={setIsMobileOpen}
                language={language}
                setLanguage={setLanguage}
                languageOptions={languageOptions}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

MainHeader.propTypes = {}

export default React.memo(MainHeader)
