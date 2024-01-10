/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './linkedin.module.scss'

function Linkedin({ hovered, width = '22.33', isLight, size, isGrey }) {
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
      viewBox="0 0 45 45"
      width={width}
      height={22}
      className={cls({ [styles.hovered]: hovered })}
      style={renderStyle()}
    >
      <path
        fill={renderColor()}
        fillRule="evenodd"
        d="M35.497 44.559v-16.6s0-5.514-4.82-5.514c-4.819 0-5.466 4.701-5.466 6.791v15.323H15.86V15.304h8.998v4.006s2.056-4.876 9.289-4.876c7.231 0 10.583 4.527 10.583 12.77v17.355h-9.233zM5.435 11.177C2.465 11.177.056 8.8.056 5.866.056 2.933 2.465.555 5.435.555c2.972 0 5.382 2.378 5.382 5.311 0 2.934-2.41 5.311-5.382 5.311zm4.606 33.382H.69V15.304h9.351v29.255z"
      />
    </svg>
  )
}

Linkedin.propTypes = {
  hovered: T.bool,
  width: T.string,
  isLight: T.bool,
  size: T.string,
  isGrey: T.bool,
}

export default Linkedin
