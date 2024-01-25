import React from 'react'
import Earth from '../Earth'
import styles from './main.module.scss'

function Main() {
  return (
    <section className={styles.main}>
      <div className={styles.relative}>
        <Earth />
      </div>
    </section>
  )
}

export default React.memo(Main)
