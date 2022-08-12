import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { SplitColorChannelText } from '../../../../../node_modules/react-text-fun/dist/index'

const ChannelSplitMaterialMouseDetection = ({ text, fontSize, fontWeight, fill }) => {
  const ref = useRef(null)

  useEffect(() => {
    const onMouseMove = (event) => {
      ref.current.material.uniforms.uRotation.value = event.clientX * 0.1
      ref.current.material.uniforms.uOffset.value = event.clientX * 0.0001
    }

    document.addEventListener('mousemove', (event) => onMouseMove(event))

    return document.removeEventListener('mousemove', onMouseMove)
  }, [ref])

  return (
    <SplitColorChannelText
      ref={ref}
      text={text}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fill={fill}
      rotation={90}
      rgbOffset={0.1}
      addBlur
      addNoise
    />
  )
}

export default ChannelSplitMaterialMouseDetection

ChannelSplitMaterialMouseDetection.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number,
  fill: PropTypes.string,
}
