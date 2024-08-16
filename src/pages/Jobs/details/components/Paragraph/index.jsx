import React from 'react'
import T from 'prop-types'

import styles from './styles.module.scss'

function Paragraph({ children }) {
  return <div className={styles.container}>{children}</div>
}

Paragraph.propTypes = {
  children: T.element,
}

export default Paragraph
