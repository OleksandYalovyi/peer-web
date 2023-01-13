/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './decrypt.module.scss'

function Decrypt({ hovered, width = '150', isLight, size }) {
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
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      width={width}
      className={cls({ [styles.hovered]: hovered })}
      style={renderStyle()}
    >
      <g>
        <g>
          <path
            {...fillPreset}
            d="M185.2,201.7c-17.9,2.2-37.6,11.4-54.4,25.6c-3.4,2.8-10.5,9.7-10.5,10.1c0,0.2,3.4,3.8,7.6,8l7.6,7.7
			l-3.2,3.6c-11.8,13.3-19.8,26.8-24.6,41.1c-3,9-4.3,16.4-4.3,24.7c0,7.5,1,13.6,3.3,19.5l0.9,2.4l22.3,22.3
			c18.6,18.6,22.8,22.6,25.1,24.1c4.8,3.2,10.4,5.4,16.6,6.7c4.1,0.9,13.6,1.2,18.1,0.6c17.8-2.2,36.2-10.6,52.3-24
			c4.2-3.5,11.3-10.2,11.3-10.6c0-0.2-3.5-3.8-7.7-8.1l-7.7-7.8l2.4-2.5c5.9-6.2,13.1-16.1,17.3-23.9c6-10.9,9.9-22.7,11.2-33.5
			c0.5-4.7,0.2-14.7-0.6-18.5c-1.4-6.4-3.6-11.6-6.9-16.6c-1.7-2.6-5.1-6.1-23.9-25l-22-22l-2.3-0.9c-3.1-1.3-9.5-2.8-13.4-3.2
			C195.8,201.1,189.7,201.2,185.2,201.7z M204.1,207.6c1.6,0.4,4.2,1,5.6,1.5c2.6,0.9,2.7,0.9,6.8,5c3.6,3.6,4.1,4.1,3.2,4
			c-4.8-0.9-12.5-1.1-18.5-0.3c-19.2,2.4-39,12.1-57.2,28.1c-1.8,1.6-3.4,3-3.7,3.2s-1.9-1.1-6.6-5.8l-6.2-6.2l4-3.5
			c16.7-14.6,35.1-23.8,53.1-26.4C189.4,206.5,200.1,206.8,204.1,207.6z M230.3,239.4c8.8,1.3,16.5,5.1,22.2,10.8
			c5.6,5.6,9.2,12.8,10.9,21.8c0.7,4,0.7,13,0,17.7c-2.3,14.5-9,29.4-19.4,43c-2.4,3.2-8.1,9.9-9,10.6c-0.5,0.4-1.1-0.1-6.3-5.3
			c-3.2-3.2-5.8-5.9-5.8-6s0.9-1.2,2-2.4c18.1-20,26.6-45,20.6-60.5c-2.4-6-7.4-10.5-13.9-12.5c-3.3-1-9.1-1.5-13.4-1
			c-6.6,0.6-14.7,3.2-22.5,7s-14.9,8.6-21.8,14.8l-3.1,2.7l-5.9-5.9l-5.9-5.9l2.5-2.3c15.3-14.3,35.6-24.5,53-26.8
			C218,238.9,227,238.9,230.3,239.4z M147.6,273.9c-2.2,2.5-5,6-6.4,7.8c-16.6,22.1-24.2,46.1-21.1,66.8l0.2,1.3l-4.1-4
			c-3.9-3.8-4.1-4.1-4.9-6.5c-7.8-22.4,2-53.3,25.1-79.2l2.7-3l6.2,6.2l6.2,6.2L147.6,273.9z M225.7,261.1l0.8,0.2l-0.2,4.2
			c-0.2,5-0.9,9.1-1.9,12.6c-3.2,10.5-9.1,21-17.7,30.9l-3.3,3.8l-6.3-6.3l-6.3-6.3l2.9-3.2c6.2-6.8,11.9-14.7,15.4-21.4
			c1.9-3.6,4.4-9.7,5.1-12.5c0.4-1.7,0.4-1.7,1.9-1.9c0.8-0.1,1.7-0.2,2-0.3C218.9,260.9,225,260.9,225.7,261.1z M207.8,265.5
			c-1.4,3.9-4.5,9.9-7.5,14.4c-3.3,5-5.6,8-10.2,13.2l-3.2,3.7l-6.3-6.3l-6.3-6.3l2.1-1.9c6.5-5.8,14.1-11,21.1-14.6
			c3.8-1.9,10-4.4,10.9-4.5C208.5,263.2,208.3,264.2,207.8,265.5z M303.6,269.3c-0.3,0.3-0.4,8.6-0.4,39c0,37,0,38.6,0.6,39.1
			c0.5,0.5,2.1,0.5,15.6,0.5c8.2,0,17.1-0.2,19.7-0.3c10.5-0.7,18.6-4.1,24.8-10.3c4.9-4.9,8-11.7,9.6-20.7c0.7-4.4,0.7-13.6,0-17.9
			c-2.6-14.5-10.9-23.9-24.2-27.7c-6.5-1.8-7-1.9-26.8-2C307.8,269,303.9,269,303.6,269.3z M667.7,270.6c-0.3,0.3-0.4,2.8-0.4,9.2
			v8.8h-3.8c-2.5,0-3.9,0.1-4.2,0.4c-0.5,0.5-0.5,10.9,0,11.5c0.3,0.3,1.7,0.4,4.2,0.4h3.8l0.1,17.8c0.1,17.4,0.1,17.9,0.8,19.9
			c1.9,5.5,5.8,8.5,12.1,9.3c4.3,0.5,10.4,0.3,14.6-0.5l0.9-0.2l-0.1-7.3l-0.1-7.3l-4-0.2c-4.3-0.2-5-0.4-5.5-1.3
			c-0.2-0.4-0.3-6.4-0.3-15.3v-14.7l5.1-0.1l5.1-0.1v-6.1v-6.1l-5.1-0.1l-5.1-0.1v-8.6c0-5.3-0.1-8.8-0.3-9.2
			c-0.3-0.6-0.8-0.6-8.8-0.6C670.4,270.3,668,270.4,667.7,270.6z M340.4,287.5c6.1,1.6,10.1,5.9,11.7,12.2
			c1.2,4.8,1.2,12.8-0.1,17.8c-1.3,4.9-4.3,8.8-8.3,10.7c-3.5,1.7-5.6,2-12.8,2.2l-6.5,0.2v-22v-22l7,0.2
			C336.5,286.9,339,287.1,340.4,287.5z M401.5,287.9c-10,1.8-17.7,8.4-21.1,18c-4.5,12.6-2.3,27,5.3,35.1c4,4.2,7.8,6.4,13.6,7.9
			c11.1,2.8,23-0.1,30.9-7.5c1.9-1.7,6.8-7.9,6.8-8.5c0-0.7-1.4-1.6-7.1-4.5c-3.5-1.8-6.4-3.3-6.5-3.3s-0.7,0.9-1.3,2
			c-1.4,2.7-4.3,5.7-6.4,6.8c-6.3,3.1-13.7,1.3-16.9-4.1c-0.9-1.6-1.8-4.4-1.8-5.9v-1.1h20c15.1,0,20-0.1,20.3-0.4
			c0.5-0.5,0.5-4.5-0.1-8.5c-1.6-10.7-6.1-18.4-13.3-22.7c-2.4-1.4-7-3-10-3.5C410.9,287.2,404.5,287.3,401.5,287.9z M467.2,287.5
			c-2.8,0.4-5.1,0.9-6.9,1.5c-10.1,3.2-16.8,11.5-18.9,23.3c-0.8,4.5-0.5,11.7,0.6,16c1.5,5.8,3.7,9.6,7.7,13.4
			c3.5,3.3,7.6,5.6,13.1,7.1c1.6,0.5,3.2,0.6,7.3,0.6c4.7,0,5.4-0.1,8-0.9c5.2-1.6,9.2-4,12.8-7.8c2.4-2.5,5.1-6.2,5.1-7
			c0-0.3-0.5-0.8-1-1.2c-2.1-1.3-11.8-6.1-12.3-6.1c-0.3,0-0.8,0.7-1.3,1.7c-1.2,2.6-2.8,4.3-5.3,5.5c-1.9,0.9-2.5,1.1-4.6,1
			c-2.8,0-4.6-0.7-6.9-2.7c-6-5.3-6.4-20-0.7-26.7c3.6-4.2,10.3-4.2,14.6-0.1c0.7,0.7,1.7,2,2.2,2.9s1.1,1.7,1.4,1.7
			c0.7,0.2,13-6.9,13.2-7.6c0.1-0.6-1.2-2.6-3.1-5c-3.1-3.8-9.2-7.5-14.5-8.7C475,287.7,469.2,287.3,467.2,287.5z M627.6,288.2
			c-3.3,0.6-6.3,1.8-8.7,3.6l-1.9,1.4l-0.1-2l-0.1-2l-7.7-0.1c-6.8-0.1-7.8,0-8.3,0.5c-0.6,0.5-0.6,2-0.6,39
			c0,29.5,0.1,38.5,0.4,38.8c0.6,0.6,17.4,0.6,17.9,0c0.3-0.3,0.4-3.3,0.4-11.4v-11l3.1,1.6c4.2,2.1,6.8,2.6,11.7,2.4
			c5.7-0.3,9.1-1.4,12.8-4.2c5.2-3.9,8.6-9.9,10.5-18.2c1-4.4,1-12.1,0-16.8c-1.3-6.2-3.4-10.4-7.2-14.4
			C644.2,289.2,636,286.7,627.6,288.2z M176.6,294.1c5.4,5.4,5.7,5.8,5.3,6.4c-0.3,0.3-1.6,1.8-3,3.4c-5.6,6.4-10.8,14.2-14.3,21.4
			c-2.5,5.1-4,9.3-5.5,15c-1.9,7.5-1.9,15.8,0.2,21.6c3.9,11,14.2,16.2,28.6,14.5c13.9-1.7,29.9-9.7,43.6-21.8l2.9-2.6l5.9,5.9
			l5.9,5.9l-2.5,2.3c-12.8,11.9-29.9,21.6-44.7,25.2c-6,1.5-10.2,2-15.9,2c-7.6,0-13.2-1-19.1-3.6c-7.6-3.3-14.6-9.8-18.2-17
			c-4.5-8.9-5.8-19.9-3.8-31.8c2.8-16.6,12.1-34.4,25.8-49.7c1.4-1.6,2.7-2.9,2.8-2.9S173.4,290.9,176.6,294.1z M532.4,288.7
			c-3.9,0.6-8.8,2.4-12,4.5l-1,0.7v-2.1c0-1.2-0.2-2.2-0.4-2.5c-0.3-0.3-2.6-0.4-8.5-0.4c-7.4,0-8.2,0-8.6,0.6
			c-0.5,0.5-0.5,3-0.5,29c0,27.1,0,28.4,0.6,28.9c0.5,0.5,1.6,0.5,8.8,0.5c6.4,0,8.3-0.1,8.6-0.4c0.2-0.3,0.4-6.2,0.4-18.3
			c0.1-16.8,0.1-18,0.7-19.1c1.2-2.4,3.3-3.4,9.4-4.4c2.3-0.4,4.6-0.8,5.1-0.9l0.9-0.2v-7.8c0-7.8-0.1-8.7-1.1-8.5
			C534.4,288.4,533.4,288.5,532.4,288.7z M540.6,289.4c-0.2,0.3-0.3,0.8-0.2,1.3c0.1,0.4,2.8,9.2,6,19.4
			c12.8,41.2,12.1,38.8,11.2,40.4c-0.8,1.6-2.2,1.9-7.2,1.9c-3.1,0-4.7,0.1-4.9,0.4c-0.3,0.3-0.4,2.3-0.4,7.2s0.1,6.9,0.4,7.2
			c0.5,0.5,13.2,0.5,16.5,0.1c5.5-0.8,10-4.7,12.6-10.9c0.6-1.3,5.7-16.8,11.4-34.4c8.7-26.6,10.4-32.1,10-32.5
			c-0.3-0.4-1.8-0.5-9.7-0.5H577l-0.3,1.4c-0.2,0.8-2.1,9.1-4.3,18.6s-4,17.4-4.2,17.5c-0.1,0.1-2.2-8.3-4.5-18.6l-4.3-18.9h-9.3
			C542.4,289,540.9,289,540.6,289.4z M412.9,301.9c3,1.4,5,4.1,5.6,7.4l0.2,1.2H408h-10.7l0.2-1c0.4-1.8,2.1-4.7,3.5-5.9
			c2.4-2.1,4.5-2.8,7.8-2.6C410.4,301.1,411.6,301.4,412.9,301.9z M633.6,302.4c2.8,1.5,4.9,4.6,5.9,8.8c0.7,3.1,0.7,10.5-0.1,13.6
			c-0.7,2.7-2.1,5.5-3.6,7.4c-2.4,2.9-7.1,3.7-10.9,1.8c-4.4-2.2-6.5-7.1-6.5-15.3c0-7.6,2-13,5.7-15.7
			C627,301,630.5,300.8,633.6,302.4z M196.2,318.6c-8.2,7.7-18.7,14.6-27.4,18.1c-1.8,0.7-3.4,1.3-3.5,1.3s0.3-1.1,0.8-2.5
			c3.8-10.5,10.4-21.2,18.3-29.7l1.9-2l6.3,6.2l6.3,6.2L196.2,318.6z M208.8,326.4l6.1,6.1l-1.9,1.8c-10,9.4-25.4,17.9-36.3,20.2
			c-2.7,0.6-8.7,1.2-11.6,1.2h-1.9v-4.6c0-2.5,0.1-5.2,0.2-5.8l0.2-1.2l3.9-1.3c9.9-3.2,22.5-11.1,31.8-19.9
			c1.5-1.4,2.9-2.6,3.1-2.6C202.6,320.3,205.5,323,208.8,326.4z"
          />
        </g>
      </g>
    </svg>
  )
}

Decrypt.propTypes = {
  hovered: T.bool,
  width: T.string,
  isLight: T.bool,
  size: T.string,
}
export default Decrypt
