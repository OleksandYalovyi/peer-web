import React, { useEffect, useRef, useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import styles from './manifesto.module.scss'
import constants from './constants'
import { TypeShuffle } from '../TextShuffleAnimation/index'

function Manifesto() {
  const [isAnimatedVisible, setVisible] = useState(false)
  const [isActiveSensor, setActiveSensore] = useState(true)
  const animatedTextRef = useRef()

  useEffect(() => {
    if (animatedTextRef.current && isAnimatedVisible) {
      const ts = new TypeShuffle(animatedTextRef.current)
      ts.trigger('fx3')
    }
  }, [isAnimatedVisible, animatedTextRef.current])
  function onActiveSensor(isVisible) {
    console.log(isVisible)
    if (isVisible) {
      setVisible(true)
      setActiveSensore(false)
    }
  }

  return (
    <VisibilitySensor
      partialVisibility
      offset={{ bottom: 150 }}
      onChange={(isVisible) => {
        onActiveSensor(isVisible)
      }}
      active={isActiveSensor}
    >
      <div className={styles.container} ref={animatedTextRef}>
        <h4 className={styles.title}>OUR MANIFESTO: EMBRACING THE METAVERSE</h4>
        <div className={styles.descriptionItems}>
          {constants.DESCRIPTION_ITEMS.map((i) => (
            <div className={styles.descriptionItem}>
              {i.title && <h5 className={styles.descriptionTitle}>{i.title}</h5>}
              {i.content}
            </div>
          ))}
        </div>
      </div>
    </VisibilitySensor>
  )
}

export default Manifesto
