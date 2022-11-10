/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './down_arrow.module.scss'

const ArrowDown = ({ hovered, width = '8.5', isLight }) => (
  <svg
    className={cls({ [styles.hovered]: hovered })}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 11"
    width={width}
  >
    <path
      fill={isLight ? '#000000' : '#ffffff'}
      fillRule="evenodd"
      d="M16.2 1.006a.98.98 0 0 1 .052 1.395l-7.128 7.624a.996.996 0 0 1-1.458 0L.538 2.401a.983.983 0 0 1 .053-1.396 1 1 0 0 1 1.406.053l6.398 6.844 6.399-6.844a1 1 0 0 1 1.406-.053v.001z"
    />
  </svg>
)

ArrowDown.propTypes = {
  hovered: T.bool,
  width: T.string,
  isLight: T.bool,
}

export default ArrowDown
