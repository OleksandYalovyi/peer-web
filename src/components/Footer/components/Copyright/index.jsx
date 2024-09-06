import React from 'react'
import styles from './styles.module.scss'

function Copyright() {
  return <div className={styles.copyright}>© {new Date().getFullYear()} Peer</div>
}

export default Copyright
