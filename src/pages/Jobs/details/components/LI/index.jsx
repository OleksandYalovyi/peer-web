import React from 'react'
import T from 'prop-types'

import styles from './styles.module.scss'

function LI({ children }) {
  return <li className={styles.container}>{children}</li>
}

LI.propTypes = {
  children: T.oneOfType([T.string, T.array]),
}

export default LI
