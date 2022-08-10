import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import cls from 'classnames'
import useScroll from 'hooks/useScroll'
import useCurrentWidth from 'hooks/useCurrentWidth'
import Logotype from '../../assets/images/header/logo.svg'
import Menu from './Menu'

import styles from './styles.module.scss'

const NAV_CONTENT = [
  { name: 'Intro', route: '/' },
  { name: 'About', route: '/about' },
  { name: 'Blockchain', route: '/blockchain' },
  { name: 'Roadmap', route: '/roadmap' },
  { name: 'News', route: '/news' },
  { name: 'Products', route: '/products' },
]

const Header = () => {
  const history = useHistory()
  const [active, setActive] = useState(false)
  const { scrollDirection } = useScroll()
  const width = useCurrentWidth()

  return (
    <header
      className={cls(styles.container, {
        [styles.hidden]:
          scrollDirection === 'down' &&
          scrollDirection !== 'bottom' &&
          scrollDirection !== 'top' &&
          width > 920,
      })}
    >
      <div className={styles.main_container}>
        <NavLink to="/" className={styles.logotype}>
          <img src={Logotype} alt="logotype" />
        </NavLink>

        <ul className={cls(styles.nav, { [styles.active]: active })}>
          {NAV_CONTENT.map((item) => (
            <li key={item.name}>
              <NavLink
                onClick={() => setActive(false)}
                exact={item.route === '/'}
                className={styles.nav_link}
                activeClassName={styles.active}
                to={item.route}
                // onClick={() => handleNavItemClick(item.name)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <Menu active={active} setActive={setActive} />
      </div>
    </header>
  )
}

Header.propTypes = {}

export default React.memo(Header)
