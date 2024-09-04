/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React, { useRef, useState, useEffect } from 'react'
import styles from './animated.module.scss'

function AnimatedSection() {
  const textRef = useRef(null)
  const [scrollPos, setScrollPos] = useState(0)
  const [animationFrameId, setAnimationFrameId] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      const id = requestAnimationFrame(() => {
        const elementTop = textRef.current.getBoundingClientRect().top
        const scrollTop = window.scrollY
        const docHeight =
          document.documentElement.scrollHeight - document.documentElement.clientHeight + elementTop
        const scrollPercent = scrollTop / docHeight
        setScrollPos(scrollPercent)
      })

      setAnimationFrameId(id)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const textElement = textRef.current
    const letters = textElement.innerText.split('')
    textElement.innerHTML = letters
      .map((letter) => `<span style="color: gray">${letter}</span>`)
      .join('')

    const spans = textElement.querySelectorAll('span')
    const totalLetters = spans.length

    spans.forEach((span, index) => {
      if (index < 30) {
        span.classList.add('animated_title')
      }
      if (index === 30 && !span.classList.contains('spaced_title')) {
        span.classList.add('spaced_title')
      }
      if (index === 145 && !span.classList.contains('spaced_text')) {
        span.classList.add('spaced_text')
      }
      if (index === 457 && !span.classList.contains('spaced_text')) {
        span.classList.add('spaced_text')
      }
      if (index === 1145 && !span.classList.contains('spaced_text')) {
        span.classList.add('spaced_text')
      }
      if (index === 1484 && !span.classList.contains('spaced_text')) {
        span.classList.add('spaced_text')
      }
    })

    const ratioIndex = Math.floor(scrollPos * totalLetters)

    spans.forEach((span, index) => {
      span.style.color = index < ratioIndex ? 'white' : 'gray'
    })
  }, [scrollPos])

  return (
    <div style={{ color: 'white' }} className={styles.wrapper}>
      <p className={styles.text} ref={textRef}>
        There’s no magic without story Hi, I'm Tony, founder and CEO of Peer. Peer is an AI company
        that’s aiming to change the way people experience AI. A sea change is approaching, echoing
        the excitement and transformative energy of the early internet boom of the 2000s and the
        subsequent mobile revolution. AI stands poised to surpass even those remarkable innovations,
        set to revolutionize how we live, work, and connect in ways we’re only beginning to imagine.
        When people ask me what we do at Peer, I often say that “we’re bottling magic.” What is
        magic without a wand? Or a lamp? Or the hero that wields it? Or simply a bottle of potion?
        That’s where the magic truly lies—it’s all about the story. AI, in many ways, is like
        magic—formless, all-powerful, all-encompassing, and full of potential. But for people to
        truly understand it, to make it a part of their lives, we need to transform it into
        something tangible, something they can see, use, and share. Just as all of humanity’s
        potential—and the magic we create—depends on the world we live in, AI needs its own world to
        realize its potential. At Peer, we’re dreaming of building that world. Peer is where we can
        enter the AI world, and where the AI world can seamlessly blend into ours. We’re not just
        building a new technology; this about crafting the experiences that make AI a living part of
        our reality. Our platform is where human creativity meets AI intelligence, creating a space
        where both can thrive and evolve together. I’m thrilled to welcome you on this journey as we
        build and shape the next era in human-computer interaction.
      </p>
    </div>
  )
}

export default AnimatedSection
