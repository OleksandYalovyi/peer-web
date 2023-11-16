import React from 'react'
import Peer from 'components/Icons/PeerServices/Peer'
import Playa from 'components/Icons/PeerServices/Playa'
import Vine from 'components/Icons/PeerServices/Vine'
import Zen from 'components/Icons/PeerServices/Zen'

import styles from './peerservices.module.scss'

const PeerServices = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <a
        href="https://apps.apple.com/us/app/peer/id1669571704"
        target="_blank"
        rel="noreferrer"
        className={styles.logo_link}
      >
        <Peer />
      </a>
      <Playa />
      <Vine />
      <Zen />
    </div>
  </section>
)

export default PeerServices
