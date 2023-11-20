import React from 'react'
import Peer from 'components/Icons/PeerServices/Peer'
import Playa from 'components/Icons/PeerServices/Playa'
import Vine from 'components/Icons/PeerServices/Vine'
import Zen from 'components/Icons/PeerServices/Zen'
import useCurrentWidth from 'hooks/useCurrentWidth'

import styles from './peerservices.module.scss'

const PeerServices = () => {
  const width = useCurrentWidth()
  const isSmallScreen = width < 1160

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <a
          href="https://apps.apple.com/us/app/peer/id1669571704"
          target="_blank"
          rel="noreferrer"
          className={styles.logo_link}
        >
          <Peer width={isSmallScreen ? '150' : null} />
        </a>
        <Playa width={isSmallScreen ? '150' : null} />
        <Vine width={isSmallScreen ? '100' : null} />
        <Zen width={isSmallScreen ? '140' : null} />
      </div>
    </section>
  )
}

export default PeerServices
