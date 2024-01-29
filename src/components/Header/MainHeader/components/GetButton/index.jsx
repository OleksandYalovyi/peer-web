import React from 'react'
import T from 'prop-types'

import styles from './style.module.scss'

function GetButton({ label, onClick }) {
  return (
    <div className={styles.gradient_wrapper} onClick={onClick}>
      <span className={styles.wrapper}>{label}</span>
    </div>
  )
}

GetButton.propTypes = {
  label: T.string,
  onClick: T.func,
}

export default GetButton
