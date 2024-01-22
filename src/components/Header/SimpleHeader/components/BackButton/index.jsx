import * as React from 'react'
import BackArrow from 'assets/backArrowHeader.svg'
import PropTypes from 'prop-types'
import styles from './back-button.module.scss'

function BackButton({ onClick }) {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <img src={BackArrow} alt="back" />
    </div>
  )
}

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default BackButton
