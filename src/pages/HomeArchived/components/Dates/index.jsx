/* eslint-disable react/prop-types */
import React, { useMemo, useRef } from 'react'
import styles from './styles.module.scss'

function Date({ position }) {
  const ref = useRef()

  const content = useMemo(() => {
    const x = `0${(`${position.x}` || '00').slice(0, 2)}`.slice(-2)
    const y = `0${(`${position.y}` || '00').slice(0, 2)}`.slice(-2)
    const c = `0${(`${Math.abs(position.x - position.y)}` || '00').slice(0, 2)}`.slice(-2)

    return `${x}’${y}’${c}`
  }, [ref.current, position])

  return <span ref={ref}>{content}</span>
}

function Dates({ userPosition }) {
  const lightStyles = useMemo(
    () => ({
      '--cx': `${userPosition.x}px`,
    }),
    [userPosition],
  )

  return (
    <section className={styles.dates}>
      <div className={styles.content}>
        <div className={styles.light} style={lightStyles} />
        <div className={styles.positions}>
          {new Array(20).fill(1).map((s) => (
            <Date position={userPosition} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Dates
