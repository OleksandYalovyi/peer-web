/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './arrow_right_round.module.scss'

const ArrowRightRound = ({ hovered, width = '20', isLight }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height="20 "
    viewBox="0 0 40 40"
    className={cls({ [styles.hovered]: hovered })}
  >
    <path
      fill={isLight ? '#000000' : '#ffffff'}
      fillRule="evenodd"
      d="M20 39.1c-11.028 0-20-8.072-20-19.101C0 8.971 8.972 0 20 0c11.027 0 19.1 8.971 19.1 19.999C39.1 31.028 31.027 39.1 20 39.1zM20 3C10.625 3 2.1 10.626 2.1 19.999 2.1 29.373 10.625 36.1 20 36.1c9.373 0 16.1-6.727 16.1-16.101C36.1 10.626 29.373 3 20 3zm-1.827 25.004A1.497 1.497 0 0 1 16.052 28a1.5 1.5 0 0 1 .005-2.121l5.905-5.878-5.905-5.88c-.587-.584-.589-1.534-.004-3.021.583.314 1.535.31 2.12.895l6.974 6.943a1.5 1.5 0 0 1 0 2.126l-6.974 6.94z"
    />
  </svg>
)

ArrowRightRound.propTypes = {
  hovered: T.bool,
  width: T.string,
  isLight: T.bool,
}

export default ArrowRightRound
