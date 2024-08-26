import React from 'react'
import T from 'prop-types'

import styles from './styles.module.scss'

function Heading({ children }) {
  return <div className={styles.container}>{children}</div>
}

Heading.propTypes = {
  children: T.string,
}

export default Heading
