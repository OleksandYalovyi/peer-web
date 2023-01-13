import React, { memo } from 'react'

import utils from '../utils'

import styles from './partner_links.module.scss'
import PartnerLink from './components/PartnerLink'

const { partners } = utils

function PartnerLinks() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Peer in the news</div>
      <div className={styles.links_wrppaer}>
        {partners.map((link) => (
          <PartnerLink link={link} />
        ))}
      </div>
    </div>
  )
}

export default memo(PartnerLinks)
