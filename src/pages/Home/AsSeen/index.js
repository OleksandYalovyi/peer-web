import React from 'react'
import Bloomberg from 'assets/images/home/bloomberg.svg'
import Buzzfeed from 'assets/images/home/buzzfeed.svg'
import Enterpreneur from 'assets/images/home/entrepreneur.svg'
import Fastcompany from 'assets/images/home/fastcompany.svg'
import Msnbc from 'assets/images/home/msnbc.svg'

import styles from './style.module.scss'

function AsSeen() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>as seen on:</div>
      <img className={styles.logo_image} src={Msnbc} alt="logo" />
      <img className={styles.logo_image} src={Fastcompany} alt="logo" />
      <img className={styles.logo_image} src={Buzzfeed} alt="logo" />
      <img className={styles.logo_image} src={Enterpreneur} alt="logo" />
      <img className={styles.logo_image} src={Bloomberg} alt="logo" />
    </section>
  )
}

export default AsSeen
