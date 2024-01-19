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

const links = [
  {
    id: 1,
    router: true,
    name: 'shop',
    to: '/home',
  },
  {
    id: 2,
    router: true,
    name: 'team',
    to: '/about',
  },
  {
    id: 3,
    router: true,
    name: 'blog',
    to: '/press',
  },
  {
    id: 4,
    router: true,
    name: 'jobs',
    to: '/careers',
  },
]

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
          <Link className={styles.logo_container} to="/">
            <img src={peerLogo} alt="peer logo" className={styles.peerLogo} />
          </Link>
        </div>
        <div className={styles.main_container__right}>
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

          <GetButton label="get peer" />
        </div>
      </div>
    </header>
  )
}

MainHeader.propTypes = {}

export default React.memo(MainHeader)
