import React from 'react'

import styles from './styles.module.scss'

const LinkToJoin = () => (
  <div className={styles.wrapper}>
    <div className={styles.title}>Want to get involved?</div>
    <a href="/" target="_blank" rel="noreferrer" className={styles.button}>
      Join the community
    </a>
  </div>
)

export default React.memo(LinkToJoin)

LinkToJoin.propTypes = {}
