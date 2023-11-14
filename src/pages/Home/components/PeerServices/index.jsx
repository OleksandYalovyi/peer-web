import React from 'react'
import Peer from 'components/Icons/PeerServices/Peer'
import Playa from 'components/Icons/PeerServices/Playa'
import Vine from 'components/Icons/PeerServices/Vine'
import Zen from 'components/Icons/PeerServices/Zen'

import styles from './styles.module.scss'

const PeerServices = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Peer />
        <Playa />
        <Vine />
        <Zen />
      </div>
    </section>
  )
}

export default PeerServices
