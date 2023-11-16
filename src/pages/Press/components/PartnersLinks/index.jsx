import React, { memo } from 'react'
import useCurrentWidth from 'hooks/useCurrentWidth'
import utils from '../utils'
import PartnerLink from './components/PartnerLink'
import styles from './partner_links.module.scss'

const { partners } = utils

function PartnerLinks() {
  const width = useCurrentWidth()
  const isMobile = width < 768

  return (
    <div className={styles.container}>
      <div className={styles.links_wrapper}>
        {isMobile ? (
          <div className={styles.row}>
            {partners.map((p) => (
              <PartnerLink link={p} />
            ))}
          </div>
        ) : (
          <>
            <div className={styles.row}>
              <PartnerLink link={partners[0]} />
              <PartnerLink link={partners[1]} />
              <PartnerLink link={partners[2]} />
            </div>

            <div className={styles.row}>
              <PartnerLink link={partners[3]} />
              <PartnerLink link={partners[4]} />
              <PartnerLink link={partners[5]} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default memo(PartnerLinks)
