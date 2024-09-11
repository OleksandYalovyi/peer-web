import React from 'react'
import links from 'constants/links'

import styles from './styles.module.scss'

function Terms() {
  return (
    <div className={styles.terms}>
      <a href={links.termsService} target="_blank" rel="noreferrer">
        Terms
      </a>
      <span>|</span>
      <a href={links.privacyPolicy} target="_blank" rel="noreferrer">
        Privacy
      </a>
    </div>
  )
}

export default Terms
