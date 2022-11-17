import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './home.module.scss'

const Home = () => {
  const ref = useRef()
  const [lightStyles, setLightStyles] = useState({
    '--cx': '0px',
  })

  useEffect(() => {
    const onMouseMove = (e) => {
      setLightStyles({ '--cx': `${e.clientX}px` })
    }

    if (ref.current) {
      document.addEventListener('mousemove', onMouseMove)
    }

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [ref])

  return (
    <section className={styles.section}>
      <div className={styles.main_container}>
        <div className={styles.main}>
          <div className={styles.mixin}>
            <h4>Peer</h4>
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
