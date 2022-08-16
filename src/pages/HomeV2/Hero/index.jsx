import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'assets/images/home/logo.svg'
import styles from './styles.module.scss'

const Hero = () => (
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.col}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="logo" />
        </Link>
        <h1 className={styles.title}>
          Sign up for the
          <br />
          Peer token sale
        </h1>

        <p className={styles.text}>
          We’re launching Peer, the rewards and utility token for the Peer3, the metaverse for the
          real world.
        </p>
        <Link className={styles.button_blue} to="">
          Sign up to buy Peer
        </Link>
      </div>
    </div>

    <div className={styles.row}>
      <div className={styles.col}>
        <h1 className={styles.title}>How to buy</h1>
        <div className={styles.text}>
          Peer will launch during the coin sale. To participate in the sale, you must sign up and
          get verified. You’ll be able to buy using BTC, BCH, ETH, and USDT/USDC.
        </div>
        <Link className={styles.link} to="">
          Learn more
        </Link>
      </div>
    </div>
  </div>
)

export default Hero
