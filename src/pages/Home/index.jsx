/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './home.module.scss'

const Date = ({ position }) => {
  const ref = useRef()

  const content = useMemo(() => {
    const x = `0${(`${position.x}` || '00').slice(0, 2)}`.slice(-2)
    const y = `0${(`${position.y}` || '00').slice(0, 2)}`.slice(-2)
    const c = `0${(`${Math.abs(position.x - position.y)}` || '00').slice(0, 2)}`.slice(-2)

    return `${x}’${y}’${c}`
  }, [ref.current, position])

  return <span ref={ref}>{content}</span>
}

const Home = () => {
  const ref = useRef()
  const [userPosition, setUserPosition] = useState({
    x: 0,
    y: 0,
  })

  const lightStyles = useMemo(
    () => ({
      '--cx': `${userPosition.x}px`,
    }),
    [userPosition],
  )

  const onMouseMove = (e) => {
    setUserPosition({
      x: e.clientX,
      y: e.clientY,
    })
  }

  return (
    <section className={styles.section}>
      <div className={styles.main_container}>
        <div className={styles.main} onMouseMove={onMouseMove}>
          <div className={styles.mixin}>
            <h4>Welcome</h4>
            <h1>We’re building magical web3 products to enable crypto mass adoption.</h1>

            <div className={styles.btns}>
              <NavLink to="/">Our team</NavLink>
              <NavLink to="/" className={styles.large_btn}>
                White paper
              </NavLink>
            </div>
          </div>
          <div className={styles.dates}>
            <div className={styles.content}>
              <div className={styles.light} ref={ref} style={lightStyles} />
              <div className={styles.positions}>
                {new Array(20).fill(1).map((s) => (
                  <Date position={userPosition} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.news}>
          <div className={styles.mixin}>
            <div className={styles.news_cld}>
              <p className={styles.title}>Latest</p>
              <a className={styles.text}>
                Peer Inc. Announces Public Sale of Its SEC Compliant Layer-1 Utility Coin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Home)

Date.propTypes = {
  position: PropTypes.any,
}
