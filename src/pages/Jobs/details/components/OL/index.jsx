import React from 'react'
import T from 'prop-types'

import styles from './styles.module.scss'

function OL({ children, ...props }) {
  return (
    <ol className={styles.container} {...props}>
      {children}
    </ol>
  )
}

OL.propTypes = {
  children: T.arrayOf(T.element),
}

export default OL
