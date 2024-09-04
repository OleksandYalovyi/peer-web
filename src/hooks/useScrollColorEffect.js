/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { useRef, useState, useEffect } from 'react'

function useScrollColorEffect(threshold = 100, initialColor = 'gray', finalColor = 'white') {
  const textRef = useRef(null)
  const [scrollPos, setScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const elementTop = textRef.current.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        const distanceFromViewportTop = windowHeight - elementTop
        setScrollPos(distanceFromViewportTop)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call to get the initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (textRef.current) {
      const textElement = textRef.current
      const letters = textElement.innerText.split('')
      textElement.innerHTML = letters
        .map((letter) => `<span style="color: ${initialColor}">${letter}</span>`)
        .join('')

      const spans = textElement.querySelectorAll('span')
      const totalLetters = spans.length

      if (scrollPos > threshold) {
        const ratio = (scrollPos - threshold) / (window.innerHeight - threshold)
        const ratioIndex = Math.floor(ratio * totalLetters)

        spans.forEach((span, index) => {
          span.style.color = index < ratioIndex ? finalColor : initialColor
        })
      } else {
        spans.forEach((span) => (span.style.color = initialColor))
      }
    }
  }, [scrollPos, initialColor, finalColor, threshold])

  return textRef
}

export default useScrollColorEffect
