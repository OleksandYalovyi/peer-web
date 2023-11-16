/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './telegram.module.scss'

const Telegram = ({ hovered, width = '23.5', isLight, size, isGrey }) => {
  const renderColor = () => {
    if (isGrey) return '#4D4D4D'
    if (hovered) return '#00d3f9'
    if (isLight) return '#000000'
    return '#ffffff'
  }

  const renderStyle = () => {
    if (size === 'sm') return { transform: 'scale(0.7)' }
    return null
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 39"
      width={width}
      className={cls({ [styles.hovered]: hovered })}
      style={renderStyle()}
    >
      <path
        fill={renderColor()}
        fillRule="evenodd"
        d="M21.821 27.876 36.76 38.272c2.277 1.585 5.445.259 5.879-2.46l5.125-32.209c.365-2.298-1.959-4.102-4.132-3.208L1.485 17.712c-1.582.66-1.487 2.904.143 3.432l6.004 1.942a11.115 11.115 0 0 0 9.63-1.353L34.95 9.796a.786.786 0 0 1 1.023.128.76.76 0 0 1-.039 1.049L21.58 25.035a1.847 1.847 0 0 0 .241 2.841z"
      />
    </svg>
  )
}

Telegram.propTypes = {
  hovered: T.bool,
  width: T.string,
  isLight: T.bool,
  size: T.string,
  isGrey: T.bool,
}
export default Telegram
