import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const NAV_CONTENT = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
]

const Header = () => {
  const handleNavItemClick = (item) => {
    console.log('%c   item   ', 'color: darkgreen; background: palegreen;', item)
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Link to="/">
          <img src="" alt="pic" />{' '}
        </Link>
      </div>
      <ul className={styles.nav_footer_list}>
        {NAV_CONTENT.map((item) => (
          <li key={item.name}>
            <Link to={item.route} onClick={() => handleNavItemClick(item.name)}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

Header.propTypes = {}

export default Header
