import React from 'react'
import PeerPhone from 'assets/Home/temp/peerPhone.png'
import BlurredBgGroup from 'assets/Home/temp/hero-desktop-group.png'
import styles from './peermain.module.scss'

const PeerMain = () => (
  <section className={styles.section}>
    <div className={styles.heroImage}>
      <img src={BlurredBgGroup} alt="Hero" />
      <a href="https://apps.apple.com/us/app/peer/id1669571704" target="_blank" rel="noreferrer">
        <img src={PeerPhone} className={styles.peerPhone} alt="peer phone" />
      </a>
    </div>
  </section>
)

export default PeerMain
