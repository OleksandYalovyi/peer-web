import React, { useState, useEffect, useRef } from 'react'

import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './style.module.scss'

const Home = () => {
  const [yPos, setScrollPosition] = useState(0)

  const section = useRef()

  const { pathname } = useLocation()

  const onScroll = () => {
    const toTop = section?.current?.getBoundingClientRect()?.top - window.innerHeight
    const bottom = section?.current?.getBoundingClientRect()?.bottom
    const parentOffset = section?.current?.offsetParent.offsetTop
    if (toTop < 0 && bottom > 0) {
      setScrollPosition(window.scrollY + window.innerHeight - parentOffset)
    }
  }

  useEffect(() => {
    if (pathname === '/') window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  const speed = yPos / 5

  return (
    <div className={styles.section_container} ref={section}>
      <div className={styles.quote_section_wrapper}>
        <div className={styles.quote_section}>
          <div className={styles.quote} style={{ transform: `translate3d(0, ${-speed}px, 0)` }}>
            It’s time to
            <br />
            up-level our concept of what personal computing is.
          </div>
          <div className={styles.text_container}>
            <div className={styles.header_wrapper}>
              <div className={styles.name}>Tony Tran</div>
              <div className={styles.position}>Founder and CEO</div>
            </div>
            <div className={styles.text}>
              “What we dream of doing with computing today has evolved which means the tools we use
              will need to evolve. It’s time to up-level our concept of what personal computing is
              so that those dreams can manifest. We are at the tail end of a cycle. The crossroad
              ahead is a key determinant of our collective future. ”
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
