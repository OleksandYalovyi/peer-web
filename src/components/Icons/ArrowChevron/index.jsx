/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './arrow_chevron.module.scss'

const ArrowRightRound = ({ hovered, width = '20', isHovered }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height="20 "
    viewBox="0 0 17 30"
    className={cls({ [styles.hovered]: hovered })}
  >
    <path
      fill={isHovered ? '#ffffff' : '#333333'}
      fillRule="evenodd"
      d="M1.404 1.035a1.62 1.62 0 0 0 0 2.278l11.665 11.752L1.404 26.816a1.618 1.618 0 0 0 0 2.276 1.59 1.59 0 0 0 2.262 0l12.796-12.889a1.622 1.622 0 0 0 0-2.278L3.666 1.035a1.59 1.59 0 0 0-2.262 0z"
    />
  </svg>
)

ArrowRightRound.propTypes = {
  hovered: T.bool,
  width: T.string,
  isHovered: T.bool,
}

export default ArrowRightRound
