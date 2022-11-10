/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './left_arrow_round.module.scss'

const ArrowLeftRound = ({ hovered, width = '20', isLight }) => (
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
      d="M20 39.1c-11.028 0-20-8.072-20-19.101C0 8.971 8.972 0 20 0c11.029 0 19.1 8.971 19.1 19.999C39.1 31.028 31.029 39.1 20 39.1zM20 3C10.627 3 2.1 10.626 2.1 19.999 2.1 29.373 10.627 36.1 20 36.1c9.374 0 16.1-6.727 16.1-16.101C36.1 10.626 29.374 3 20 3zm3.948 25a1.498 1.498 0 0 1-2.122.004l-6.972-6.94a1.497 1.497 0 0 1-.441-1.063c0-.399.157-.782.441-1.063l6.972-6.943c.587-.585 1.537-.581 2.122-.895.584 1.487.583 2.437-.004 3.021l-5.906 5.88 5.906 5.878A1.5 1.5 0 0 1 23.948 28z"
    />
  </svg>
)

ArrowLeftRound.propTypes = {
  hovered: T.bool,
  width: T.string,
  isLight: T.bool,
}

export default ArrowLeftRound
