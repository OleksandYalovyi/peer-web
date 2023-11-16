/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './xsocial.module.scss'

const XSocial = ({ hovered, width = '26', isLight, size, isGrey }) => {
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
      width={width}
      viewBox="0 0 26 23"
      xmlns="http://www.w3.org/2000/svg"
      className={cls({ [styles.hovered]: hovered })}
      style={renderStyle()}
    >
      <path
        fill={renderColor()}
        fillRule="evenodd"
        id="Vector"
        d="M19.7703 0.25H23.5873L15.2484 9.78077L25.0584 22.75H17.3773L11.3611 14.8842L4.47727 22.75H0.658042L9.57727 12.5558L0.166504 0.25H8.04266L13.4807 7.43962L19.7703 0.25ZM18.4307 20.4654H20.5457L6.89343 2.41462H4.62381L18.4307 20.4654Z"
      />
    </svg>
  )
}

XSocial.propTypes = {
  hovered: T.bool,
  width: T.string,
  isLight: T.bool,
  size: T.string,
  isGrey: T.bool,
}
export default XSocial
