import React, { useState } from 'react'
import useCurrentWidth from 'hooks/useCurrentWidth'
import LongArrow from '../../../../components/Icons/LongArrow'
import Pressinquir from '../../../../assets/pressinquir.svg'

import styles from './contacts.module.scss'

function Contacts() {
  const [isHovered, setHovered] = useState('')
  const { width } = useCurrentWidth()
  const isMobile = width < 480

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.icon}>
          <img src={Pressinquir} height={isMobile ? '67' : '100'} alt="" />
        </div>

        <div className={styles.content}>
          <div className={styles.info}>For press inquiries, please contact</div>

          <a
            href="mailto:press@peer.inc"
            className={styles.link}
            onMouseEnter={() => setHovered('mail')}
            onMouseLeave={() => setHovered('')}
          >
            press@peer.inc
            <LongArrow hovered={isHovered === 'mail'} />
          </a>
        </div>
      </div>
    </div>
  )
}
export default React.memo(Contacts)

Contacts.propTypes = {}
