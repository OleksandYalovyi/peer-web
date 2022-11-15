/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './fb.module.scss'

const Facebook = ({ hovered, width = '14', isLight, size }) => {
  const renderColor = () => {
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
      viewBox="24 15 15 34"
      width={width}
      className={cls({ [styles.hovered]: hovered })}
      style={renderStyle()}
    >
      <path
        fill={renderColor()}
        fillRule="evenodd"
        d="M38.174,32.874h-4.039c0,6.453,0,14.398,0,14.398h-5.985c0,0,0-7.868,0-14.398h-2.845v-5.088  h2.845v-3.291c0-2.357,1.12-6.04,6.04-6.04l4.433,0.017v4.939c0,0-2.695,0-3.219,0c-0.524,0-1.268,0.262-1.268,1.386v2.99h4.56  L38.174,32.874z"
      />
    </svg>
  )
}

Facebook.propTypes = {
  hovered: T.bool,
  width: T.string,
  isLight: T.bool,
  size: T.string,
}
export default Facebook
