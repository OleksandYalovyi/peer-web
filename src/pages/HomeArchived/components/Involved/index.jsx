import React from 'react'
import links from 'constants/links'

import styles from './styles.module.scss'

const Involved = () => (
  <section className={styles.involved}>
    <h2 className={styles.title}>want to get involved?</h2>

    <a href={links.peerClubSingUP} className={styles.link}>
      Join the community
    </a>
  </section>
)

export default Involved
