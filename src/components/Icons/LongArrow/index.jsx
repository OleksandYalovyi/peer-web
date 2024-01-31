/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './longarrow.module.scss'

function Logo({ hovered, isLight }) {
  return (
    <svg
      width="27"
      height="14"
      viewBox="0 0 27 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cls({ [styles.hovered]: hovered })}
    >
      <path
        className={styles.arrow}
        id="Vector"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.1939 7.15563L26.3885 7.35786L20.4038 13.5739L19.4464 12.5794L24.1674 7.67595H0.0153809V6.28843H23.8332L19.4464 1.73181L20.4038 0.737305L26.3885 6.95339L26.1939 7.15563Z"
        fill={isLight ? '#000000' : '#ffffff'}
      />
    </svg>
  )
}

Logo.propTypes = {
  hovered: T.bool,
  isLight: T.bool,
}

export default Logo
