/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './logo.module.scss'

function PEERStarLogo({ hovered, width = '36', height = '36', isLight }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cls({ [styles.hovered]: hovered })}
      viewBox="0 0 70 70"
      width={width}
      height={height}
    >
      <path
        fill={isLight ? '#000000' : '#ffffff'}
        fillRule="evenodd"
        d="m39.06 2.686 8.191 16.856a8.592 8.592 0 0 0 3.949 3.975l16.844 8.181c3.08 1.51 3.08 5.891 0 7.399l-13.969 6.79a17.879 17.879 0 0 0-8.219 8.211L39.06 68.083c-1.51 3.075-5.895 3.075-7.405 0l-6.796-13.985a17.875 17.875 0 0 0-8.217-8.211l-13.971-6.79c-3.077-1.508-3.077-5.889 0-7.399l13.971-6.788a17.682 17.682 0 0 0 8.217-8.241l6.796-13.983c1.51-3.075 5.895-3.075 7.405 0z"
      />
    </svg>
  )
}

PEERStarLogo.propTypes = {
  hovered: T.bool,
  width: T.string,
  height: T.string,
  isLight: T.bool,
}

export default PEERStarLogo
