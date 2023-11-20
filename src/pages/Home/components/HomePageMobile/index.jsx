import React from 'react'
import PeerPhone from 'assets/Home/Mobile/peer-mob.png'
import PeerIcon from 'assets/Home/Mobile/Icons/peer-icon.png'
import PlayaIcon from 'assets/Home/Mobile/Icons/playa-icon.svg'
import VineIcon from 'assets/Home/Mobile/Icons/vine-icon.svg'
import ZenIcon from 'assets/Home/Mobile/Icons/zen-icon.png'

import PlayaGroup from 'assets/Home/Mobile/temp/playa-mobile-group.png'
import VineZenGroup from 'assets/Home/Mobile/temp/vine-zen-group-1.png'

import styles from './homemobile.module.scss'

const HomePageMobile = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.col}>
        <div className={styles.imgGroup}>
          <img src={PlayaGroup} alt="peer and playa" />
          <a
            href="https://apps.apple.com/us/app/peer/id1669571704"
            target="_blank"
            rel="noreferrer"
          >
            <img src={PeerPhone} className={styles.peerPhone} alt="peer" />
            <img src={PeerIcon} className={styles.peer_icon} alt="peer icon" />
            <img src={PlayaIcon} className={styles.playa_icon} alt="playa icon" />
          </a>
        </div>
        <div className={styles.imgGroup}>
          <img src={VineZenGroup} alt="vine and zen" />
          <img src={VineIcon} className={styles.vine_icon} alt="vine icon" />
          <img src={ZenIcon} className={styles.zen_icon} alt="zen icon" />
        </div>
      </div>
    </div>
  </section>
)

export default HomePageMobile
