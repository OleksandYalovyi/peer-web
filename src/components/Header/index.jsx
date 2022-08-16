import React from 'react'
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
        <span className={styles.logo_text}>About Peer</span>
      </div>
    </header>
  )
}

Header.propTypes = {}

export default React.memo(Header)
