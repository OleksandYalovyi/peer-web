import React from 'react'
import styles from './separator.module.scss'

function Separator() {
  return <div className={styles.separator} />
}

export default React.memo(Separator)
