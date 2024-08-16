import React from 'react'
import T from 'prop-types'

import styles from './styles.module.scss'

function OL({ children }) {
  return <ol className={styles.container}>{children}</ol>
}

OL.propTypes = {
  children: T.element,
}

export default OL
