import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Ripples from 'react-ripples'
import cls from 'classnames'
import useScroll from 'hooks/useScroll'
import PropTypes from 'prop-types'
import Modal from 'components/ModalForm'
import SignIn from 'components/Signin'
import MobileMenu from './MobileMenu'
import styles from './styles.module.scss'

const Header = () => {
  const { scrollDirection } = useScroll()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMenu, setIsMenuOpen] = useState(false)

  return (
    <header
      className={cls(styles.container, {
        [styles.hidden]:
          scrollDirection === 'down' &&
          scrollDirection !== 'bottom' &&
          scrollDirection !== 'top' &&
          !isMenu,
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
          <div className={styles.button_wrapper}>
            <Ripples during="1400" color="rgba(255, 255, 255, .1)">
              <Link to="/" className={styles.button} onClick={() => setIsModalOpen(true)}>
                Sign in to Peer
              </Link>
            </Ripples>
          </div>
        </div>
        <MobileMenu isMenu={isMenu} setIsMenuOpen={setIsMenuOpen} setIsModalOpen={setIsModalOpen} />
      </div>
      <Modal defaultOpened={isModalOpen} handleClose={() => setIsModalOpen(false)}>
        <SignIn />
      </Modal>
    </header>
  )
}

Header.propTypes = {}

export default React.memo(Header)
