import React, { useState } from 'react'
// import LongArrow from '../../../../assets/longarrow.svg'
import LongArrow from '../../../../components/Icons/LongArrow'
import Pressinquir from '../../../../assets/pressinquir.svg'
import Pressroll from '../../../../assets/pressroll.svg'

import styles from './contacts.module.scss'

const Contacts = () => {
  const [isHovered, setHovered] = useState('')

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.icon}>
          <img src={Pressinquir} height="100" alt="" />
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
      <div className={styles.item}>
        <div className={styles.icon}>
          <img src={Pressroll} height="63.5" alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.info}>Press kit & media assets</div>
          <a
            href="/placeholder"
            className={styles.link}
            onMouseEnter={() => setHovered('link')}
            onMouseLeave={() => setHovered('')}
          >
            Available Here
            <LongArrow hovered={isHovered === 'link'} />
          </a>
        </div>
      </div>
    </div>
  )
}
export default React.memo(Contacts)

Contacts.propTypes = {}
