/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './styles.module.scss'

function CloseIcon({ hovered, width = '26', size }) {
  const renderColor = () => {
    if (hovered) return '#747474'
    return '#ffffff'
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="35" height="35">
      <path
        fill="#ffffff"
        fillRule="evenodd"
        d="M10.1814 24.71C9.40047 25.491 9.40047 26.7574 10.1814 27.5384L12.4794 29.8364C13.2606 30.6176 14.5268 30.6176 15.3081 29.8364L20.0246 25.1199L24.741 29.8364C25.5223 30.6176 26.7885 30.6176 27.5697 29.8364L29.8677 27.5384C30.6486 26.7574 30.6486 25.491 29.8677 24.71L25.1509 19.9932L29.8677 15.2767C30.6486 14.4958 30.6486 13.2293 29.8677 12.4484L27.5697 10.1504C26.7885 9.36914 25.5223 9.36914 24.741 10.1504L20.0246 14.8669L15.3081 10.1504C14.5268 9.36914 13.2606 9.36914 12.4794 10.1504L10.1814 12.4484C9.40047 13.2293 9.40047 14.4958 10.1814 15.2767L14.8982 19.9932L10.1814 24.71Z"
      />
    </svg>
  )
}
