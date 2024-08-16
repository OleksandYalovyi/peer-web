import React from 'react'
import T from 'prop-types'

import styles from './styles.module.scss'

function Title({ children }) {
  return (
    <div className={styles.container}>
      {children}
      <a href="mailto:jobs@peer.inc" className={styles.apply_btn}>
        apply now
      </a>
    </div>
  )
}

Title.propTypes = {
  children: T.element,
}

export default Title
