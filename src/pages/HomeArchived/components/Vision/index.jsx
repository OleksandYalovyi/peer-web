import React from 'react'
import styles from './styles.module.scss'

function Vision() {
  return (
    <section className={styles.section}>
      <p className={styles.sub_title}>our vision</p>
      <h2 className={styles.title}>
        a social network at the intersection of the real and digital world
      </h2>
      <a href="/about" className={styles.link}>
        Meet our team
      </a>
    </section>
  )
}

export default Vision
