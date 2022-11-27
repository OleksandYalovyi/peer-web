import React from 'react'
import styles from './styles.module.scss'

const ZenProverb = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.content}>
        “Change how you see and see how you change.”
        <p className={styles.paragraph}>zen proverb</p>
      </div>
    </div>
  </section>
)

export default React.memo(ZenProverb)
