import React from 'react'
import { Link } from 'react-router-dom'
import Ripples from 'react-ripples'
import cls from 'classnames'
import PropTypes, { bool } from 'prop-types'
import logo from 'assets/images/home/logo.svg'

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
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/" className={styles.logo_text} onClick={onClick}>
            Sign In
          </Link>
          <Link to="/" className={styles.logo_text} onClick={onClick}>
            White paper
          </Link>
          <Link to="/" className={styles.logo_text} onClick={onClick}>
            Updates
          </Link>
          <Link to="/" className={styles.logo_text} onClick={onClick}>
            Contact us
          </Link>
          <div className={cls(styles.logo_text, styles.qa)}>Q&A</div>
        </div>
        <div style={{ bacground: 'grey' }}>
          The next frontier cover experiences that can be found at the intersection of the
          digital-physical divide. We aim to be the first to open the door to this frontier and
          invite the world in.The next frontier cover experiences that can be found at the
          intersection of the digital-physical divide. We aim to be the first to open the door to
          this frontier and invite the world in.The next frontier cover experiences that can be
          found at the intersection of the digital-physical divide. We aim to be the first to open
          the door to this frontier and invite the world in.The next frontier cover experiences that
          can be found at the intersection of the digital-physical divide. We aim to be the first to
          open the door to this frontier and invite the world in.The next frontier cover experiences
          that can be found at the intersection of the digital-physical divide. We aim to be the
          first to open the door to this frontier and invite the world in.The next frontier cover
          experiences that can be found at the intersection of the digital-physical divide. We aim
          to be the first to open the door to this frontier and invite the world in.The next
          frontier cover experiences that can be found at the intersection of the digital-physical
          divide. We aim to be the first to open the door to this frontier and invite the world
          in.The next frontier cover experiences that can be found at the intersection of the
          digital-physical divide. We aim to be the first to open the door to this frontier and
          invite the world in.The next frontier cover experiences that can be found at the
          intersection of the digital-physical divide. We aim to be the first to open the door to
          this frontier and invite the world in.The next frontier cover experiences that can be
          found at the intersection of the digital-physical divide. We aim to be the first to open
          the door to this frontier and invite the world in.The next frontier cover experiences that
          can be found at the intersection of the digital-physical divide. We aim to be the first to
          open the door to this frontier and invite the world in.The next frontier cover experiences
          that can be found at the intersection of the digital-physical divide. We aim to be the
          first to open the door to this frontier and invite the world in.
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
