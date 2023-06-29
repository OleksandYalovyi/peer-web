import { React, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import useCurrentWidth from 'hooks/useCurrentWidth'
import PeerLogoGlobal from 'assets/Home/peerlogogloba.png'
import animatedImage from './nextparticle'
import styles from './styles.module.scss'

const Global = () => {
  const width = useCurrentWidth()

  useEffect(() => {
    animatedImage(window)
  }, [])

  return (
    <section className={styles.global}>
      {/* <NavLink to="/" className={styles.link}>
        <img src={PeerLogoGlobal} alt="Peer" />
      </NavLink> */}
      <NavLink to="/" className={styles.link}>
        <div className={styles.link}>
          <img
            src={PeerLogoGlobal}
            alt="Peer"
            id="logo"
            className="next-particle"
            data-width={width}
            data-height="800"
            data-min-width="400"
            data-min-height="400"
          />
        </div>
      </NavLink>
    </section>
  )
}

export default Global
