import { useState, useEffect } from 'react'

const getWidth = () =>
  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

const getHeight = () =>
  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

export default function useCurrentSize() {
  const [size, setSise] = useState({ width: getWidth(), height: getHeight() })

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
