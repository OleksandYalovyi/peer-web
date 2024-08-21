import { useState, useEffect } from 'react'

const getWidth = () =>
  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

const getHeight = () =>
  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

export default function useCurrentSize() {
  const [size, setSise] = useState({ width: getWidth(), height: getHeight() })
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    if (size < 768 && !isMobile) {
      setIsMobile(true)
    } else if (isMobile) {
      setIsMobile(false)
    }
  }, [size])

  useEffect(() => {
    let timeoutId = null
    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setSise({ width: getWidth(), height: getHeight() }), 150)
    }
    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return size
}
