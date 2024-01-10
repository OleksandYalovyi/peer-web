import React from 'react'
import MetaEarthImg from 'assets/Home/metaearth.webp'
import styles from './styles.module.scss'

function MetaEarth() {
  return (
    <section className={styles.metaearh}>
      <img src={MetaEarthImg} alt="Metaearh" />
    </section>
  )
}

export default MetaEarth
