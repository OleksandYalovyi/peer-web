/* eslint-disable react/prop-types */

import React, { useEffect, useState, useRef, useCallback } from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { lerp, getMousePos, getRandomString } from 'utils/utils'
import styles from './styles.module.scss'

const Card = ({ to, name, children, size }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const bgRef = useRef(null)
  const decoRef = useRef(null)
  const [renderedStyles, setRenderedStyles] = useState({
    x: { previous: 0, current: 0, amt: 0.1 },
    y: { previous: 0, current: 0, amt: 0.1 },
  })
  const [randomString, setRandomString] = useState(getRandomString(3000))
  const [scrollVal, setScrollVal] = useState({ x: 0, y: 0 })

  const handleCalculateSizePosition = useCallback(() => {
    setScrollVal({ x: window.scrollX, y: window.scrollY })
  }, [])

  const handleMouseMove = useCallback((ev) => {
    setMousePos(getMousePos(ev))
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleCalculateSizePosition)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleCalculateSizePosition)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleCalculateSizePosition, handleMouseMove])

  const handleMouseEnter = useCallback(() => {
    decoRef.current.style.opacity = 1
  }, [])

  const handleMouseLeave = useCallback(() => {
    decoRef.current.style.opacity = 0
  }, [])

  const handleMouseMoveCard = useCallback(() => {
    if (bgRef.current) {
      setRandomString(getRandomString(3000))

      const { left, top } = bgRef.current.getBoundingClientRect()

      const scrollDiff = {
        x: scrollVal.x - window.scrollX,
        y: scrollVal.y - window.scrollY,
      }

      let newRenderedStyles = {
        x: {
          ...renderedStyles.x,
          current: mousePos.x - (scrollDiff.x + left),
          previous: renderedStyles.x.previous,
        },
        y: {
          ...renderedStyles.y,
          current: mousePos.y - (scrollDiff.y + top),
          previous: renderedStyles.y.previous,
        },
      }

      newRenderedStyles = {
        x: {
          ...newRenderedStyles.x,
          previous: lerp(
            newRenderedStyles.x.previous,
            newRenderedStyles.x.current,
            newRenderedStyles.x.amt,
          ),
        },
        y: {
          ...newRenderedStyles.y,
          previous: lerp(
            newRenderedStyles.y.previous,
            newRenderedStyles.y.current,
            newRenderedStyles.y.amt,
          ),
        },
      }

      setRenderedStyles({ ...newRenderedStyles })

      bgRef.current.style.setProperty('--x', `${newRenderedStyles.x.previous}px`)
      bgRef.current.style.setProperty('--y', `${newRenderedStyles.y.previous}px`)
    }
  }, [bgRef, decoRef, mousePos, renderedStyles, scrollVal])

  const onRoute = useCallback(() => {
    window.open(to, '_blank')
  }, [to])

  useEffect(() => {
    if (bgRef.current) {
      bgRef.current.addEventListener('mouseenter', handleMouseEnter)
      bgRef.current.addEventListener('mouseleave', handleMouseLeave)
      bgRef.current.addEventListener('mousemove', handleMouseMoveCard)
    }

    return () => {
      if (bgRef.current) {
        bgRef.current.removeEventListener('mouseenter', handleMouseEnter)
        bgRef.current.removeEventListener('mouseleave', handleMouseLeave)
        bgRef.current.removeEventListener('mousemove', handleMouseMoveCard)
      }
    }
  }, [bgRef, handleMouseEnter, handleMouseLeave, handleMouseMoveCard])

  return (
    <NavLink
      to={to}
      className={classNames(styles.card, {
        [styles.medium]: size === 'medium',
      })}
      onClick={onRoute}
    >
      <div className={styles.animation}>
        <div className={styles.bg} ref={bgRef}>
          <div className={styles.deco} ref={decoRef}>
            {randomString}
          </div>
        </div>
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.img}>{children}</div>
    </NavLink>
  )
}

export default React.memo(Card)
