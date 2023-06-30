/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */

import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import PropTypes from 'prop-types'
import { getRandomChar } from 'utils/utils'

const mask = (chars, progress) => {
  const masked = []
  for (let i = 0; i < chars.length; i++) {
    const position = (i + 1) / chars.length
    if (position > progress) {
      masked.push(getRandomChar())
    } else {
      masked.push(chars[i])
    }
  }
  return masked.join('')
}

const TextShuffleAnimation = ({ text = '' }) => {
  const { ref, inView } = useInView()

  const [shuffleText, setShuffleText] = useState('')

  useEffect(() => {
    let progress = inView ? 0 : 1

    if (text) {
      const animationInterval = setInterval(() => {
        progress += 0.01
        setShuffleText(mask(text.split(''), progress))

        if (progress >= 1) {
          clearInterval(animationInterval)
        }
      }, 10)
    }
  }, [text, inView])

  return <div ref={ref}>{shuffleText}</div>
}

TextShuffleAnimation.propTypes = {
  text: PropTypes.string.isRequired,
}

export default TextShuffleAnimation
