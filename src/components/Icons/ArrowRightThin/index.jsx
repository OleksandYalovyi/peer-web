/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cn from 'classnames'
import styles from './arrowRightThin.module.scss'

function ArrowRightThin({ hovered, width = '7' }) {
  return (
    <svg
      width={width}
      height="10"
      viewBox="0 0 7 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn({ [styles.hovered]: hovered })}
    >
      <g clipPath="url(#clip0_14374_722)">
        <path
          d="M6.32749 4.2508L1.64912 0L0 1.49841L3.84795 5L0 8.50159L1.64912 10L6.32749 5.7492C6.78363 5.33475 6.78363 4.66525 6.32749 4.2508Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_14374_722">
          <rect width="6.66667" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

ArrowRightThin.propTypes = {
  hovered: T.bool,
  width: T.string,
}

export default ArrowRightThin
