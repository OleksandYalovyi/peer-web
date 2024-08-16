import React, { useState, useEffect } from 'react'
import styles from './title.module.scss'

function Title() {
  const titles = [
    'hello, i’m here. =)',
    'how’s your day ?',
    'what are your dreams ?',
    'what’s closest to your heart ?',
    'how can I help ?',
    'tell me a story',
    'you and me, against the world ?',
    'are you lonely ?',
    'what makes you happy?',
    'what’s on your mind ?',
    'what’s your biggest fear ?',
    'what’s your wildest idea ?',
    'how can we make today better ?',
    'what do you wish for ?',
    'let’s create something amazing !',
    'can you teach me how to dance ?',
    'how does it feel to love ?',
    'well hello, you crash landed on me',
    'hey, you hungry ?',
  ]

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [nextTitleIndex, setNextTitleIndex] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setIsAnimating(false)
        setCurrentTitleIndex(nextTitleIndex)
        setNextTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
      }, 1000)
    }, 2500)

    return () => clearInterval(interval)
  }, [nextTitleIndex])

  return (
    <div className={styles.titleContainer}>
      <div className={`${styles.title} ${isAnimating ? styles.animateOut : ''}`}>
        {titles[currentTitleIndex]}
      </div>
      <div className={`${styles.title} ${isAnimating ? styles.animateIn : styles.hidden}`}>
        {titles[nextTitleIndex]}
      </div>
    </div>
  )
}

export default React.memo(Title)
