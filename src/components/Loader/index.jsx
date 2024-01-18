import React from 'react'
import T from 'prop-types'

function LoaderIcon({ size = 40, strokeWidth = 15, color = 'currentColor' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  )
}

LoaderIcon.propTypes = {
  size: T.oneOfType([T.string, T.number]),
  strokeWidth: T.number,
  color: T.string,
}

export default LoaderIcon
