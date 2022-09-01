import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import cls from 'classnames'
import Ripples from 'react-ripples'
import logo from 'assets/images/home/logo.svg'
import chevron from 'assets/images/home/chevron.svg'
import arrow from 'assets/images/home/arrow.svg'
import SignUp from 'components/SignUp/index'
import SignIn from 'components/Signin/index'
import ModalForm from 'components/ModalForm/index'
import styles from './styles.module.scss'

const Hero = () => {
  const [isSignIn, setIsSignIn] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setIsSignIn(false)
  }

  const onClick = () => setIsModalOpen(true)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Link to="/" className={styles.logo}>
              <img src={logo} alt="logo" />
            </Link>
            <h1 className={styles.title}>
              Sign up for the <br />
              Peer coin sale
            </h1>

            <p className={styles.text}>
              We’re launching Peer, the rewards and utility coin for Peer3, the metaverse for the
              real world.
            </p>
            <div className={styles.button_wrapper}>
              <Ripples during="1400" color="rgba(255, 255, 255, .1)">
                <Link className={styles.button_blue} to="" onClick={onClick}>
                  Sign up to buy Peer
                  <span className={styles.arrow}>
                    <img src={arrow} alt="" />
                  </span>
                </Link>
              </Ripples>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col}>
            <h1 className={cls(styles.title, styles.sm)}>How to buy</h1>
            <div className={cls(styles.text, styles.text_wide)}>
              Peer will launch during the coin sale. To participate in the sale, you must sign up
              and get verified. You’ll be able to buy using BTC, BCH, ETH, and USDT/USDC.
            </div>
            <Link className={styles.link} to="">
              Learn more
              <span className={styles.chevron}>
                <img src={chevron} alt="" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <ModalForm defaultOpened={isModalOpen} handleClose={handleCloseModal}>
        <>
          {isSignIn && <SignIn switchWindow={() => setIsSignIn(false)} />}
          {!isSignIn && <SignUp switchWindow={() => setIsSignIn(true)} />}
        </>
      </ModalForm>
    </>
  )
}

export default Hero
