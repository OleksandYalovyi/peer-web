import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
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

const Header = () => (
  // const handleNavItemClick = (item) => {
  //   console.log('%c   item   ', 'color: darkgreen; background: palegreen;', item)
  // }

  <header>
    <div className={styles.main_container}>
      <NavLink to="/" className={styles.logotype}>
        <img src={Logotype} alt="logotype" />
      </NavLink>

      <ul className={styles.nav}>
        {NAV_CONTENT.map((item) => (
          <li key={item.name}>
            <NavLink
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

      <Menu />
    </div>
  </header>
)

Header.propTypes = {}

export default React.memo(Header)
