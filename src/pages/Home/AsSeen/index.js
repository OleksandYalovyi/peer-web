/* eslint-disable max-len */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cls from 'classnames'
import Geekwire from 'assets/images/home/geekwire.webp'
import Decrypt from 'assets/images/home/decrypt.webp'
import Coinstack from 'assets/images/home/coinstack.webp'
import Cryptoslate from 'assets/images/home/cryptoslate.webp'
import Bloomberg from 'assets/images/home/bloomberg.svg'

import styles from './style.module.scss'

function AsSeen() {
  const [hovered, setHovered] = useState()
  return (
    <section className={styles.section}>
      <div className={styles.heading}>as seen on:</div>
      <Link
        className={styles.link}
        to={{
          pathname:
            'https://www.geekwire.com/2022/seattle-startup-raises-14m-to-fuel-ambitious-plan-for-a-social-network-built-on-the-blockchain/',
        }}
        target="_blank"
        onMouseEnter={() => setHovered('geek')}
        onMouseLeave={() => setHovered('')}
      >
        <img
          className={cls(styles.logo_image, { [styles.hovered]: hovered === 'geek' })}
          style={{ width: 160 }}
          src={Geekwire}
          alt="logo"
        />
      </Link>
      <Link
        className={styles.link}
        to={{
          pathname:
            'https://decrypt.co/101251/before-building-the-metaverse-blockchain-needs-an-operating-system',
        }}
        target="_blank"
        onMouseEnter={() => setHovered('decrypt')}
        onMouseLeave={() => setHovered('')}
      >
        <img
          className={cls(styles.logo_image, { [styles.hovered]: hovered === 'decrypt' })}
          style={{ width: 150 }}
          src={Decrypt}
          alt="logo"
        />
      </Link>
      <Link
        className={styles.link}
        to={{ pathname: 'https://coinstack.substack.com/p/peer-metaverse-coin-deep-dive' }}
        target="_blank"
        onMouseEnter={() => setHovered('coin')}
        onMouseLeave={() => setHovered('')}
      >
        <img
          className={cls(styles.logo_image, { [styles.hovered]: hovered === 'coin' })}
          style={{ width: 65 }}
          src={Coinstack}
          alt="logo"
        />
      </Link>
      <Link
        className={styles.link}
        to=""
        target="_blank"
        onMouseEnter={() => setHovered('crypto-slate')}
        onMouseLeave={() => setHovered('')}
      >
        <img
          className={cls(styles.logo_image, { [styles.hovered]: hovered === 'crypto-slate' })}
          style={{ width: 223 }}
          src={Cryptoslate}
          alt="logo"
        />
      </Link>
      <Link
        className={styles.link}
        to={{ pathname: 'https://www.youtube.com/watch?v=epi_eIAqqYQ&t=96s' }}
        target="_blank"
        onMouseEnter={() => setHovered('bloomberg')}
        onMouseLeave={() => setHovered('')}
      >
        <img
          className={cls(styles.logo_image, { [styles.hovered]: hovered === 'bloomberg' })}
          style={{ width: 155 }}
          src={Bloomberg}
          alt="logo"
        />
      </Link>
    </section>
  )
}

export default AsSeen
