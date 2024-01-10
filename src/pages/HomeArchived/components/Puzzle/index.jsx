import React from 'react'
import links from 'constants/links'

import PeerApp from 'assets/Home/Puzzle/peerapp.svg'
import Market from 'assets/Home/Puzzle/market.png'
import BlockChain from 'assets/Home/Puzzle/blockchain.svg'
import Peer from 'assets/Home/Puzzle/peer.svg'
import Zen from 'assets/Home/Puzzle/zen.svg'
import Omni from 'assets/Home/Puzzle/omni.svg'
import Solar from 'assets/Home/Puzzle/solar.svg'
import styles from './styles.module.scss'

import Card from '../Card'
import TextShuffleAnimation from '../TextShuffleAnimation'

function Puzzle() {
  return (
    <>
      <section className={styles.building}>
        <h2 className={styles.title}>OUR ROADMAP</h2>

        <TextShuffleAnimation
          className={styles.text}
          text="an end-to-end ecosystem TO empower communities and support A next-level social economy"
        />
      </section>

      <section className={styles.puzzle}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Card to={links.peerClub} name="UI">
              <img src={PeerApp} alt="PeerApp" className={styles.peerapp} />
            </Card>
          </div>

          <div className={styles.col}>
            <Card to="/" name="marketplace" size="medium">
              <img src={Market} alt="Market" className={styles.market} />
            </Card>

            <Card to="https://explorer.peer.inc/" name="blockchain" size="medium">
              <img src={BlockChain} alt="BlockChain" className={styles.blockchain} />
            </Card>
          </div>

          <div className={styles.col}>
            <Card to={links.peerClubProfileTrade} name="coin" size="medium">
              <img src={Peer} alt="Coin" className={styles.coin} />
            </Card>

            <Card to="/" name="wallet">
              <img src={Zen} alt="Wallet" className={styles.wallet} />
            </Card>

            <Card to="https://explorer.peer.inc/" name="explorer">
              <img src={Omni} alt="Omni" className={styles.omni} />
            </Card>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col}>
            <Card to="/" name="future">
              <img src={Solar} alt="Solar" className={styles.solar} />
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default Puzzle
