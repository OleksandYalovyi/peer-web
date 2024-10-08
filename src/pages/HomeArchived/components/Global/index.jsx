import { React, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import useCurrentSize from 'hooks/useCurrentSize'
import PeerLogoGlobal from 'assets/Home/peerlogogloba.png'
import animatedImage from './nextparticle'
import styles from './styles.module.scss'

function Global() {
  const { width } = useCurrentSize()
  const isMobile = width < 768

  useEffect(() => {
    animatedImage(window)
  }, [])

  return (
    <section className={styles.global}>
      <div className={styles.link}>
        <img
          src={PeerLogoGlobal}
          alt="Peer"
          className="next-particle"
          data-width={width}
          data-height={width < 1600 ? (isMobile ? 400 : 800) : 1200}
          data-color="#ffffff"
          data-particle-gap="2"
          data-gravity="0.1"
          data-mouse-force={isMobile ? 20 : 120}
          data-min-width={isMobile ? 166 : 540}
          data-min-height={isMobile ? 166 : 540}
        />
      </div>
    </section>
  )
}

export default Global
