import React from 'react'
import T from 'prop-types'

import styles from './styles.module.scss'

function UL({ children }) {
  return <ul className={styles.container}>{children}</ul>
}

UL.propTypes = {
  children: T.arrayOf(T.element),
}

export default UL
