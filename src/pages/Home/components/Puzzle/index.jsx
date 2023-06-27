import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import PeerApp from 'assets/Home/Puzzle/peerapp.svg'
import Market from 'assets/Home/Puzzle/market.png'
import BlockChain from 'assets/Home/Puzzle/blockchain.svg'
import Peer from 'assets/Home/Puzzle/peer.svg'
import Zen from 'assets/Home/Puzzle/zen.svg'
import Omni from 'assets/Home/Puzzle/omni.svg'
import Solar from 'assets/Home/Puzzle/solar.svg'
import styles from './styles.module.scss'

const Puzzle = () => (
  <>
    <section className={styles.building}>
      <h2 className={styles.title}>WHAT WE’RE BUILDING</h2>

      <p className={styles.text}>
        peer:THE SOCIAL NETWORK // peer market:digital assets marketplace // pl0:peer layer 0
        blockchain // peer dollar:pl0 native crypto // omni:pl0 block explorer // zen:self-custody
        wallet // solar:ai observer // g:ar glasses
      </p>
    </section>

    <section className={styles.puzzle}>
      <div className={styles.row}>
        <div className={styles.col}>
          <NavLink to="/" className={styles.card}>
            UI
            <div className={styles.img}>
              <img src={PeerApp} alt="PeerApp" className={styles.peerapp} />
            </div>
          </NavLink>
        </div>

        <div className={styles.col}>
          <NavLink to="/" className={classNames(styles.card, styles.medium)}>
            marketplace
            <div className={styles.img}>
              <img src={Market} alt="Market" className={styles.market} />
            </div>
          </NavLink>

          <NavLink to="/" className={classNames(styles.card, styles.medium)}>
            blockchain
            <div className={styles.img}>
              <img src={BlockChain} alt="BlockChain" className={styles.blockchain} />
            </div>
          </NavLink>
        </div>

        <div className={styles.col}>
          <NavLink to="/" className={classNames(styles.card, styles.medium)}>
            coin
            <div className={styles.img}>
              <img src={Peer} alt="Coin" className={styles.coin} />
            </div>
          </NavLink>

          <NavLink to="/" className={styles.card}>
            wallet
            <div className={styles.img}>
              <img src={Zen} alt="Wallet" className={styles.wallet} />
            </div>
          </NavLink>

          <NavLink to="/" className={styles.card}>
            explorer
            <div className={styles.img}>
              <img src={Omni} alt="Omni" className={styles.omni} />
            </div>
          </NavLink>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <NavLink to="/" className={styles.card}>
            future
            <div className={styles.img}>
              <img src={Solar} alt="Solar" className={styles.solar} />
            </div>
          </NavLink>
        </div>
      </div>
    </section>
  </>
)

export default Puzzle
