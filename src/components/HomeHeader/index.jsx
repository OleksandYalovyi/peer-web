/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cls from 'classnames'
import useScroll from 'hooks/useScroll'
import useCurrentWidth from 'hooks/useCurrentWidth'
import Plus from 'assets/Home/plus.svg'

import MobileMenu from '../Header/MobileMenu'

import styles from './header.module.scss'

const HomeHeader = () => {
  const width = useCurrentWidth()
  const { scrollDirection } = useScroll()
  const [isMenu, setIsMenuOpen] = useState(false)

  const isMobile = width < 681
  return (
    <header
      className={cls(
        styles.container,
        {
          [styles.hidden]:
            scrollDirection === 'down' &&
            scrollDirection !== 'bottom' &&
            scrollDirection !== 'top' &&
            !isMenu,
        },
        {
          [styles.bg]: scrollDirection === 'up' || scrollDirection === 'bottom',
        },
      )}
    >
      <div className={styles.main_container}>
        <div className={styles.left_container}>
          <Link className={styles.logo_container} to="/">
            <img src={Plus} alt="plus" width={isMobile ? 20 : 25} />
          </Link>
        </div>
        <div className={styles.right_container}>
          {isMobile && <MobileMenu isMenu={isMenu} setIsMenuOpen={setIsMenuOpen} />}
        </div>
      </div>
    </header>
  )
}

HomeHeader.propTypes = {}

export default React.memo(HomeHeader)
