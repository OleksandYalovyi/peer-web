import React from 'react'
import { Link } from 'react-router-dom'
import Ripples from 'react-ripples'
import cls from 'classnames'
import PropTypes, { bool } from 'prop-types'

import burger from 'assets/images/header/burger.svg'
import styles from './styles.module.scss'

const Header = ({ isMenu, setIsMenuOpen, setIsModalOpen }) => {
  const onClick = () => setIsMenuOpen((s) => !s)

  const onSignIn = () => {
    setIsMenuOpen((s) => !s)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.burger} onClick={onClick}>
          <img src={burger} className={styles.burger_img} alt="menu" />
        </div>
      </div>
      <div className={cls(styles.menu_container, { [styles.opened]: isMenu })}>
        <div className={styles.menu_content}>
          <Link to="/" className={styles.logo_text} onClick={onClick}>
            About Peer
          </Link>
          <div className={styles.right_section}>
            <div className={styles.button_wrapper}>
              <Ripples during="1400" color="rgba(255, 255, 255, .1)">
                <Link to="/" className={styles.button} onClick={onSignIn}>
                  Sign in to Peer
                </Link>
              </Ripples>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Header.propTypes = {
  isMenu: bool,
  setIsMenuOpen: PropTypes.func,
  setIsModalOpen: PropTypes.func,
}

export default React.memo(Header)
