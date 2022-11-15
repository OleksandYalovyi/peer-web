/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './twitter.module.scss'

const Twitter = ({ hovered, width = '26', isLight, size }) => {
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
      viewBox="0 0 52 42"
      width={width}
      className={cls({ [styles.hovered]: hovered })}
      style={renderStyle()}
    >
      <path
        fill={renderColor()}
        fillRule="evenodd"
        d="M25.246 12.941C12.12 12.613 3.229 2.021 3.229 2.021S-1.3 10.518 6.427 15.999c0 0-2.139.185-4.516-1.17 0 0-.927 7.882 8.173 10.387 0 0-.603.656-4.447.349 0 0 1.881 6.969 9.732 7.184 0 0-4.828 5.143-15.359 4.588 0 0 16.699 11.177 34.413-.995 6.012-4.13 13.162-15.477 12.175-25.864 0 0 3.242-2.053 5.172-5.399 0 0-1.391.566-2.837.973-1.195.338-2.428.527-2.937.546 0 0 3.969-2.709 4.404-5.747 0 0-4.33 2.327-6.597 2.496l-.077.006A10.778 10.778 0 0 0 35.902.015c-5.94 0-10.753 4.758-10.753 10.627 0 .789.087 1.559.251 2.299h-.154z"
      />
    </svg>
  )
}

Twitter.propTypes = {
  hovered: T.bool,
  width: T.string,
  isLight: T.bool,
  size: T.string,
}
export default Twitter
