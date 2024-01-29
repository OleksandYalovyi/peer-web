/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './styles.module.scss'

function CloseIcon({ hovered, width = '26', size }) {
  const renderColor = () => {
    if (hovered) return '#ffffff'
    return '#5b5b5b'
  }

  const renderStyle = () => {
    const style = { transition: 'all 0.15s ease' }
    if (size === 'sm') return { ...style, transform: 'scale(0.66)' }
    if (hovered) return { ...style, transform: 'scale(1.1)' }
    return style
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      viewBox="1 1 55 55"
      style={{ ...renderStyle(), transition: 'all 0.15s ease' }}
      className={cls({ [styles.hovered]: hovered })}
    >
      <path
        fill={renderColor()}
        fillRule="evenodd"
        d="M44.073 1.67a4.282 4.282 0 0 0-6.055 0L25.909 13.779 13.799 1.67a4.28 4.28 0 0 0-6.054 0L1.69 7.725a4.28 4.28 0 0 0 0 6.054l12.109 12.11L1.69 37.998a4.282 4.282 0 0 0 0 6.055l6.055 6.055a4.28 4.28 0 0 0 6.054 0l12.11-12.11 12.109 12.11a4.282 4.282 0 0 0 6.055 0l6.055-6.055a4.282 4.282 0 0 0 0-6.055l-12.11-12.109 12.11-12.11a4.28 4.28 0 0 0 0-6.054L44.073 1.67z"
      />
    </svg>
  )
}

CloseIcon.propTypes = {
  hovered: T.bool,
  width: T.oneOfType([T.string, T.number]),
  size: T.string,
}
export default CloseIcon

export function IconCLose() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 55 55">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M44.073 1.67a4.282 4.282 0 0 0-6.055 0L25.909 13.779 13.799 1.67a4.28 4.28 0 0 0-6.054 0L1.69 7.725a4.28 4.28 0 0 0 0 6.054l12.109 12.11L1.69 37.998a4.282 4.282 0 0 0 0 6.055l6.055 6.055a4.28 4.28 0 0 0 6.054 0l12.11-12.11 12.109 12.11a4.282 4.282 0 0 0 6.055 0l6.055-6.055a4.282 4.282 0 0 0 0-6.055l-12.11-12.109 12.11-12.11a4.28 4.28 0 0 0 0-6.054L44.073 1.67z"
      />
    </svg>
  )
}
