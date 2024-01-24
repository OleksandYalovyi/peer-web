import React from 'react'
import PropTypes from 'prop-types'

import styles from './style.module.scss'

function GetButton({ label }) {
  return (
    <div className={styles.gradient_wrapper}>
      <span className={styles.wrapper}>{label}</span>
    </div>
  )
}

GetButton.propTypes = {
  label: PropTypes.string,
}

export default GetButton
