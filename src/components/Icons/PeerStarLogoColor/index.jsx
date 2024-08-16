/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './logo.module.scss'

function PeerStarLogoColor({ hovered, width = '36', height = '36' }) {
  return (
    <svg
      className={cls({ [styles.hovered]: hovered })}
      width={width}
      height={height}
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
    >
      <rect width="43" height="43" fill="#1D1D1D" />
      <g clipPath="url(#clip0_14180_6443)">
        <rect width="1920" height="1965" transform="translate(-738 -78)" fill="black" />
        <rect width="43" height="43" fill="url(#pattern0_14180_6443)" />
      </g>
      <defs>
        <pattern
          id="pattern0_14180_6443"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_14180_6443" transform="scale(0.000488281)" />
        </pattern>
        <clipPath id="clip0_14180_6443">
          <rect width="1920" height="1965" fill="white" transform="translate(-738 -78)" />
        </clipPath>
      </defs>
    </svg>
  )
}

PeerStarLogoColor.propTypes = {
  hovered: T.bool,
  width: T.string,
  height: T.string,
}

export default PeerStarLogoColor
