import React from 'react'
import Peer from 'assets/Home/Mobile/peer-mob.png'
import Playa from 'assets/Home/Mobile/playa-mob.png'
import Vine from 'assets/Home/Mobile/vine-mob.png'
import Zen from 'assets/Home/Mobile/zen-mob.png'
import PeerIcon from 'assets/Home/Mobile/Icons/peer-icon-mob.png'
import PlayaIcon from 'assets/Home/Mobile/Icons/playa-icon-mob.png'
import VineIcon from 'assets/Home/Mobile/Icons/vine-icon-mob.png'
import ZenIcon from 'assets/Home/Mobile/Icons/zen-icon-mob.png'

import styles from './homemobile.module.scss'

const HomePageMobile = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.imgGroup}>
        <div className={styles.imgWrapper}>
          <div className={styles.imgItem}>
            <a
              href="https://apps.apple.com/us/app/peer/id1669571704"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Peer} className={styles.peer} alt="peer" />
            </a>
            <img src={PeerIcon} className={styles.peer_icon} alt="peer icon" />
          </div>
          <div className={styles.imgItem}>
            <img src={Playa} className={styles.playa} alt="playa" />
            <img src={PlayaIcon} className={styles.playa_icon} alt="playa icon" />
          </div>
        </div>
        <div className={styles.imgWrapper}>
          <div className={styles.imgItem}>
            <img src={Vine} className={styles.vine} alt="vine" />
            <img src={VineIcon} className={styles.vine_icon} alt="vine icon" />
          </div>
          <div className={styles.imgItem}>
            <img src={Zen} className={styles.zen} alt="zen" />
            <img src={ZenIcon} className={styles.zen_icon} alt="zen icon" />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HomePageMobile
