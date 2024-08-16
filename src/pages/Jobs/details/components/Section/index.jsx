import React from 'react'
import T from 'prop-types'
import styles from './styles.module.scss'

function Section({ children }) {
  return <div className={styles.container}>{children}</div>
}

export default Section

Section.propTypes = {
  children: T.element,
}
