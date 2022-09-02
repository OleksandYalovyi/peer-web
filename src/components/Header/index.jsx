import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Ripples from 'react-ripples'
import cls from 'classnames'
import useScroll from 'hooks/useScroll'
import Modal from 'components/ModalForm'
import SignIn from 'components/Signin'
import SignUp from 'components/SignUp'
import MobileMenu from './MobileMenu'
import styles from './styles.module.scss'

const Header = () => {
  const { scrollDirection } = useScroll()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMenu, setIsMenuOpen] = useState(false)
  const [isSignIn, setIsSignIn] = useState(true)

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setIsSignIn(true)
  }

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
        <NavLink to="/" className={styles.logo_text} activeClassName={styles.active}>
          About Peer
        </NavLink>
        <div className={styles.right_section}>
          <NavLink to="/white-paper" className={styles.text_link} activeClassName={styles.active}>
            White paper
          </NavLink>
          <div className={styles.button_wrapper}>
            <Ripples during="1400" color="rgba(255, 255, 255, .1)">
              <NavLink to="/" className={styles.button} onClick={() => setIsModalOpen(true)}>
                Sign in to Peer
              </NavLink>
            </Ripples>
          </div>
        </div>
        <MobileMenu isMenu={isMenu} setIsMenuOpen={setIsMenuOpen} setIsModalOpen={setIsModalOpen} />
      </div>
      <Modal defaultOpened={isModalOpen} handleClose={handleCloseModal}>
        <>
          {isSignIn && <SignIn switchWindow={() => setIsSignIn(false)} />}
          {!isSignIn && <SignUp switchWindow={() => setIsSignIn(true)} />}
        </>
      </Modal>
    </header>
  )
}

Header.propTypes = {}

export default React.memo(Header)
