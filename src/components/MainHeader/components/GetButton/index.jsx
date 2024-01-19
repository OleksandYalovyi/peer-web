import React from 'react'
import PropTypes from 'prop-types'

import styles from './style.module.scss'

function GetButton({ label }) {
  return <span className={styles.wrapper}>{label}</span>
}

GetButton.propTypes = {
  label: PropTypes.string,
}

export default GetButton
