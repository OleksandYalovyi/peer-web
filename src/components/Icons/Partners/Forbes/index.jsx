/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './forbes.module.scss'

function Forbes({ hovered, width = '150', isLight, size }) {
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
      viewBox="0 0 411.7 103.2"
      width={width}
      className={cls({ [styles.hovered]: hovered })}
      style={renderStyle()}
    >
      <path
        {...fillPreset}
        d="M250.8,29.3c-6.6,0-11.8,1.4-17,4.3c0-15.1,0-28.9,0.5-33.6l-31.7,5.7v2.8l3.3,0.5c4.3,0.9,5.7,3.3,6.6,9
	c1,11.4,0.5,71.9,0,81.9c8.5,1.9,17.5,3.3,26.5,3.3c25.1,0,40.2-15.6,40.2-40.2C279.2,43.5,266.9,29.3,250.8,29.3L250.8,29.3z
	 M239.9,98c-1.9,0-4.3,0-5.7-0.5c-0.5-6.6-0.9-34.5-0.5-59.2c2.8-0.9,4.7-1.4,7.1-1.4c10.4,0,16.1,12.3,16.1,27.4
	C257,83.3,249.9,98,239.9,98L239.9,98z M83.3,1.9H0v4.3l4.7,0.5c6.1,0.9,8.5,4.7,9.5,13.7c1.4,17,0.9,47.8,0,62.5
	c-0.9,9-3.3,13.3-9.5,13.7l-4.7,1v3.8h53.5v-3.8l-5.7-1c-6.2-0.5-8.5-4.7-9.5-13.7c-0.5-6.2-0.9-16.1-0.9-28.4l11.4,0.5
	c7.1,0,10.4,5.7,11.8,13.7h4.3V35h-4.3c-1.4,8-4.7,13.7-11.8,13.7l-11.4,0.5c0-16.1,0.5-31.2,0.9-40.2h16.6C67.7,9,74.3,17,79,31.2
	l4.7-1.4L83.3,1.9L83.3,1.9z"
      />
      <path
        {...fillPreset}
        d="M110.3,28.4c23.7,0,35.5,16.1,35.5,37.4c0,20.3-13.3,37.4-36.9,37.4c-23.7,0-35.5-16.1-35.5-37.4
	C73.4,45.4,86.6,28.4,110.3,28.4L110.3,28.4z M108.8,33.1c-10.4,0-13.3,14.2-13.3,32.7c0,18,4.7,32.7,14.2,32.7
	c10.9,0,13.7-14.2,13.7-32.7C123.5,47.8,118.8,33.1,108.8,33.1z M285.4,66.3c0-19.4,12.3-37.9,36.4-37.9c19.9,0,29.3,14.7,29.3,34.1
	h-44c-0.5,17.5,8,30.3,25.1,30.3c7.6,0,11.4-1.9,16.1-5.2l1.9,2.4c-4.7,6.6-15.1,13.3-28.4,13.3C300.5,103.2,285.4,88,285.4,66.3
	L285.4,66.3z M307.1,57.3l22.2-0.5c0-9.5-1.4-23.7-9.5-23.7C311.9,33.1,307.6,46.4,307.1,57.3z M407.5,32.2
	c-5.7-2.4-13.2-3.8-21.8-3.8c-17.5,0-28.4,10.4-28.4,22.7s8,17.5,19.4,21.3c11.8,4.3,15.1,7.6,15.1,13.2c0,5.7-4.3,10.9-11.8,10.9
	c-9,0-15.6-5.2-20.8-19.4l-3.3,1l0.5,20.8c5.7,2.4,16.1,4.3,25.1,4.3c18.5,0,30.3-9.5,30.3-24.1c0-9.9-5.2-15.6-17.5-20.4
	c-13.3-5.2-18-8.5-18-14.7c0-6.2,4.3-10.4,9.9-10.4c8.5,0,14.2,5.2,18.5,18l3.3-0.9L407.5,32.2L407.5,32.2z M207.3,30.3
	c-8-4.7-22.2-2.4-29.8,14.7l0.5-16.6l-31.7,6.2v2.8l3.3,0.5c4.3,0.5,6.2,2.8,6.6,9c0.9,11.4,0.5,31.2,0,41.2c-0.5,5.7-2.4,8.5-6.6,9
	l-3.3,0.5v3.8h44v-3.8l-5.7-0.5c-4.7-0.5-6.2-3.3-6.6-9c-0.9-9-0.9-27-0.5-38.3c2.4-3.3,12.8-6.2,22.2,0L207.3,30.3L207.3,30.3z"
      />
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
