import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'assets/images/home/logo.svg'
import FB from 'assets/images/icons/facebook.svg'
import ln from 'assets/images/icons/linkedin.svg'
import Peer from 'assets/images/icons/peer.svg'
import Telegram from 'assets/images/icons/telegram.svg'
import Twitter from 'assets/images/icons/twitter.svg'
import styles from './styles.module.scss'

const Disclaimer = () => (
  <div className={styles.container}>
    <div className={styles.title}>Disclaimer</div>
    <div className={styles.content}>
      The information shown is provided for your information only and does not constitute investment
      advice. Peers (PMC) are utility coins designed for use in the Peer metaverse. They are the
      native cryptocurrency running on the Peer Metaverse blockchain.
    </div>
    <div className={styles.icons_container}>
      <div className={styles.sn_wrapper}>
        <div className={styles.icon_border}>
          <img src={Telegram} width="32px" alt="icon" />
        </div>
        <div className={styles.name}>Telegram</div>
      </div>
      <div className={styles.sn_wrapper}>
        <div className={styles.icon_border}>
          <img src={Peer} width="33px" alt="icon" />
        </div>
        <div className={styles.name}>Peer</div>
      </div>
      <div className={styles.sn_wrapper}>
        <div className={styles.icon_border}>
          <img src={Twitter} width="35px" alt="icon" />
        </div>
        <div className={styles.name}>Twitter</div>
      </div>
      <div className={styles.sn_wrapper}>
        <div className={styles.icon_border}>
          <img src={ln} width="30px" alt="icon" />
        </div>
        <div className={styles.name}>Linkedin</div>
      </div>
      <div className={styles.sn_wrapper}>
        <div className={styles.icon_border}>
          <img src={FB} width="19px" alt="icon" />
        </div>
        <div className={styles.name}>Facebook</div>
      </div>
    </div>
  </div>
)

export default Disclaimer
