import React from 'react'
import T from 'prop-types'

import styles from './styles.module.scss'

function Subtitle({ children }) {
  return <div className={styles.container}>{children}</div>
}

Subtitle.propTypes = {
  children: T.element,
}

export default Subtitle
