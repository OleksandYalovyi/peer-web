import { useState, useEffect } from 'react'

export default function useScroll() {
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect())
  const [scrollY, setScrollY] = useState(bodyOffset.top)
  const [scrollX, setScrollX] = useState(bodyOffset.left)
  const [scrollDirection, setScrollDirection] = useState()

  const listener = () => {
    setBodyOffset(document.body.getBoundingClientRect())
    setScrollY(-bodyOffset.top)
    setScrollX(bodyOffset.left)
    setLastScrollTop(-bodyOffset.top)
    if (lastScrollTop < -bodyOffset.top && scrollDirection !== 'down' && window.scrollY > 0) {
      setScrollDirection('down')
    }
    if (lastScrollTop > -bodyOffset.top && scrollDirection !== 'up' && window.scrollY > 0) {
      setScrollDirection('up')
    }
    if (window.scrollY === 0) setScrollDirection('top')

    const documentHeight = document.body.scrollHeight
    const currentScroll = window.scrollY + window.innerHeight
    const modifier = 50
    if (currentScroll + modifier > documentHeight) {
      setScrollDirection('bottom')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  })

  return {
    scrollY,
    scrollX,
    scrollDirection,
  }
}
