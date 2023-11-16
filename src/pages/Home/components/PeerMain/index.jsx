import React from 'react'
// import MainBg from 'assets/Home/Main-min.png'
import PeerPhone from 'assets/Home/peerPhone.png'
import BlurredBg from 'assets/Home/blurredBg.png'
import styles from './peermain.module.scss'

const PeerMain = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <a href="https://apps.apple.com/us/app/peer/id1669571704" target="_blank" rel="noreferrer">
        <img src={PeerPhone} className={styles.peerPhone} alt="peer phone" />
      </a>
      <img src={BlurredBg} className={styles.blurredBg} alt="blurred background" />
    </div>
  </section>
)

export default PeerMain
