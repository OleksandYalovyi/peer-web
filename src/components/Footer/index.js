import React from 'react'
import { Link } from 'react-router-dom'
import PeerImage from 'assets/img/peerlogo.svg'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const NAV_CONTENT = [
  { name: 'Join Us', route: '/' },
  { name: 'Our Mission', route: '/mission' },
  { name: 'What We Build', route: '/what-we-build' },
  { name: 'Our Roadmap', route: '/roadmap' },
]

const Footer = () => {
  const handleNavItemClick = (item) => {
    console.log('%c   item   ', 'color: darkgreen; background: palegreen;', item)
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Link to="/">
          <img src={PeerImage} alt="pic" />{' '}
        </Link>
      </div>
      <ul className={styles.nav_footer_list}>
        {NAV_CONTENT.map((item) => (
          <li key={item.name}>
            <Link
              to={item.route}
              // className={cls({ [styles['menu-button']]: item.name === 'Login' }, 'animate-in')}
              onClick={() => handleNavItemClick(item.name)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

Footer.propTypes = {}

export default Footer
