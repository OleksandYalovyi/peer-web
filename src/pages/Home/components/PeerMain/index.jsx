import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import PeerPhone from 'assets/Home/temp/peer-desktop-phone.png'
import BlurredBgGroup from 'assets/Home/temp/hero-desktop-group.png'
import styles from './peermain.module.scss'

function PeerMain(props) {
  const { setIsPeerMainLoaded, isPeerMainLoaded } = props

  return (
    <section className={styles.section}>
      <div className={styles.heroWrapper}>
        <img
          src={BlurredBgGroup}
          alt="Hero"
          onLoad={() => setIsPeerMainLoaded(true)}
          className={cls(styles.heroImage, { [styles.visible]: isPeerMainLoaded })}
        />
        <a href="https://apps.apple.com/us/app/peer/id1669571704" target="_blank" rel="noreferrer">
          <img src={PeerPhone} className={styles.peerPhone} alt="peer phone" />
        </a>
      </div>
    </section>
  )
}

export default PeerMain

PeerMain.propTypes = {
  setIsPeerMainLoaded: T.func,
  isPeerMainLoaded: T.bool,
}
