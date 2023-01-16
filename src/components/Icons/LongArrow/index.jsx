/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './longarrow.module.scss'

const Logo = ({ hovered, width = '38', isLight }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    viewBox="0 0 140 40"
    className={cls({ [styles.hovered]: hovered })}
  >
    <path
      className={styles.arrow}
      fillRule="evenodd"
      fill={isLight ? '#000000' : '#ffffff'}
      d="m75.442 18.5.561.583-17.247 17.92-2.759-2.867L69.602 20H0v-4h68.639L55.997 2.864l2.759-2.867 17.247 17.92-.561.583z"
    />
  </svg>
)

Logo.propTypes = {
  hovered: T.bool,
  width: T.string,
  isLight: T.bool,
}

export default Logo
