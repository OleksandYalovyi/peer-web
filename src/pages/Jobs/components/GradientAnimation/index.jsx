import React from 'react'
import styles from './styles.module.scss'

export default function GradientAnimation() {
  return (
    <div className={styles.gradient_bg}>
      <div className={styles.g1} />
      <div className={styles.g2} />
      <div className={styles.g3} />
    </div>
  )
}
