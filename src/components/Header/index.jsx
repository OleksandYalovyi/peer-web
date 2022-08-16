import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import cls from 'classnames'
import useScroll from 'hooks/useScroll'
import useCurrentWidth from 'hooks/useCurrentWidth'

import styles from './styles.module.scss'

const NAV_CONTENT = [
  { name: 'Intro', route: '/' },
  { name: 'About', route: '/about' },
]

const Header = () => {
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
        <Link to="/" className={styles.logo_text}>
          About Peer
        </Link>
        <div className={styles.right_section}>
          <Link to="/white-paper" className={styles.text_link}>
            White paper
          </Link>
          <Link to="/" className={styles.button}>
            Sign in to Peer
          </Link>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {}

export default React.memo(Header)
