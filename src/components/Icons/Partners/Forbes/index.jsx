/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './forbes.module.scss'

function Forbes({ hovered, width = '149.844', isLight, size }) {
  const renderColor = () => {
    if (hovered) return '#ffffff'
    if (isLight) return '#000000'
    return '#4d4d4d'
  }

  const renderStyle = () => {
    if (size === 'sm') return { transform: 'scale(0.6)' }
    return null
  }

  const fillPreset = {
    fill: renderColor(),
    fillRule: 'evenodd',
  }

  return (
    <svg
      width={width}
      className={cls({ [styles.hovered]: hovered })}
      style={renderStyle()}
      viewBox="0 0 151 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          {...fillPreset}
          d="M91.8357 10.914C89.4341 10.914 87.5419 11.4232 85.6498 12.4778C85.6498 6.98631 85.6498 1.96758 85.8317 0.258301L74.2968 2.33126V3.34955L75.4976 3.53139C77.0622 3.8587 77.5717 4.73152 77.8992 6.80448C78.263 10.9504 78.0811 32.9528 77.8992 36.5896C80.9921 37.2806 84.267 37.7897 87.5419 37.7897C96.6753 37.7897 102.17 32.1164 102.17 23.1699C102.17 16.0782 97.6942 10.914 91.8357 10.914ZM87.8694 35.8986C87.1781 35.8986 86.3047 35.8986 85.7953 35.7168C85.6134 33.3165 85.4678 23.1699 85.6134 14.1871C86.6322 13.8598 87.3236 13.678 88.1969 13.678C91.9813 13.678 94.0554 18.1512 94.0554 23.6427C94.0918 30.5526 91.5082 35.8986 87.8694 35.8986ZM30.886 0.949286H0.574951V2.51309L2.28518 2.69493C4.50484 3.02224 5.37815 4.40421 5.74203 7.6773C6.25146 13.8598 6.06952 25.061 5.74203 30.4071C5.41454 33.6802 4.54123 35.244 2.28518 35.3894L0.574951 35.7531V37.1351H20.0425V35.7531L17.9683 35.3894C15.7123 35.2076 14.8754 33.6802 14.5115 30.4071C14.3296 28.1523 14.184 24.5519 14.184 20.0787L18.3322 20.2605C20.9158 20.2605 22.1166 22.3335 22.626 25.2429H24.1907V12.987H22.626C22.1166 15.8964 20.9158 17.9693 18.3322 17.9693L14.184 18.1512C14.184 12.296 14.366 6.80448 14.5115 3.53139H20.5519C25.2095 3.53139 27.6111 6.4408 29.3214 11.605L31.0316 11.0959L30.886 0.949286Z"
        />
        <path
          {...fillPreset}
          d="M40.7096 10.5866C49.3335 10.5866 53.6273 16.4418 53.6273 24.1881C53.6273 31.5707 48.7877 37.7896 40.2002 37.7896C31.5762 37.7896 27.2825 31.9344 27.2825 24.1881C27.2825 16.7691 32.0857 10.5866 40.7096 10.5866ZM40.1638 12.2959C36.3794 12.2959 35.3242 17.4601 35.3242 24.1881C35.3242 30.7343 37.0344 36.0803 40.4913 36.0803C44.4575 36.0803 45.4764 30.9161 45.4764 24.1881C45.5128 17.6419 43.8026 12.2959 40.1638 12.2959ZM104.425 24.3699C104.425 17.3146 108.9 10.5866 117.67 10.5866C124.911 10.5866 128.332 15.9326 128.332 22.9879H112.321C112.139 29.3523 115.232 34.0073 121.454 34.0073C124.22 34.0073 125.602 33.3164 127.313 32.1162L128.004 32.989C126.294 35.3893 122.509 37.8259 117.67 37.8259C109.919 37.7896 104.425 32.2617 104.425 24.3699ZM112.321 21.0968L120.399 20.915C120.399 17.4601 119.89 12.2959 116.942 12.2959C114.068 12.2959 112.503 17.1328 112.321 21.0968ZM148.854 11.9685C146.78 11.0957 144.051 10.5866 140.922 10.5866C134.554 10.5866 130.588 14.3688 130.588 18.842C130.588 23.3153 133.499 25.2064 137.647 26.5883C141.941 28.1521 143.141 29.3523 143.141 31.3889C143.141 33.4618 141.577 35.3529 138.848 35.3529C135.573 35.3529 133.171 33.4618 131.279 28.2976L130.078 28.6613L130.26 36.2258C132.334 37.0986 136.119 37.7896 139.393 37.7896C146.125 37.7896 150.419 34.3346 150.419 29.025C150.419 25.4246 148.527 23.3516 144.051 21.606C139.212 19.7149 137.501 18.5147 137.501 16.2599C137.501 14.0051 139.066 12.4777 141.104 12.4777C144.197 12.4777 146.271 14.3688 147.835 19.0239L149.036 18.6966L148.854 11.9685ZM76.0058 11.2776C73.0948 9.56828 67.9277 10.4047 65.1622 16.6236L65.3442 10.5866L53.8092 12.8414V13.8597L55.01 14.0415C56.5747 14.2233 57.2661 15.0598 57.4116 17.3146C57.7391 21.4605 57.5936 28.6613 57.4116 32.2981C57.2297 34.371 56.5383 35.3893 55.01 35.5711L53.8092 35.753V37.135H69.8199V35.753L67.7458 35.5711C66.0355 35.3893 65.4897 34.371 65.3442 32.2981C65.0167 29.025 65.0167 22.4788 65.1622 18.3693C66.0355 17.1691 69.8199 16.1145 73.2403 18.3693L76.0058 11.2776Z"
        />
      </g>
    </svg>
  )
}

Forbes.propTypes = {
  hovered: T.bool,
  width: T.string,
  isLight: T.bool,
  size: T.string,
}
export default Forbes
