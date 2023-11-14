import React from 'react'
// import MainBg from 'assets/Home/Main-min.png'
import PeerPhone from 'assets/Home/peerPhone.png'
import BlurredBg from 'assets/Home/blurredBg.png'
import styles from './styles.module.scss'

const PeerMain = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <img src={PeerPhone} className={styles.peerPhone} alt="peer phone" />
      <img src={BlurredBg} className={styles.blurredBg} alt="blurred background" />
    </div>
  </section>
)

export default PeerMain