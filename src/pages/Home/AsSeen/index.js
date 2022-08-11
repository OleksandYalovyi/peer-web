import React from 'react'
import Geekwire from 'assets/images/home/geekwire.webp'
import Decrypt from 'assets/images/home/decrypt.webp'
import Coinstack from 'assets/images/home/coinstack.webp'
import Cryptoslate from 'assets/images/home/cryptoslate.webp'
import Bloomberg from 'assets/images/home/bloomberg.svg'

import styles from './style.module.scss'

function AsSeen() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>as seen on:</div>
      <img className={styles.logo_image} style={{ width: 160 }} src={Geekwire} alt="logo" />
      <img className={styles.logo_image} style={{ width: 150 }} src={Decrypt} alt="logo" />
      <img className={styles.logo_image} style={{ width: 65 }} src={Coinstack} alt="logo" />
      <img className={styles.logo_image} style={{ width: 223 }} src={Cryptoslate} alt="logo" />
      <img className={styles.logo_image} style={{ width: 155 }} src={Bloomberg} alt="logo" />
    </section>
  )
}

export default AsSeen
