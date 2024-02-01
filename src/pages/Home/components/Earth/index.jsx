import React, { useEffect, useMemo, useRef, useState } from 'react'
import EarthImage from 'assets/Home/earth_.png'
import InEarthImage from 'assets/Home/inEarth.png'
import styles from './earth.module.scss'

function Earth() {
  const divRef = useRef(null)
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollHeight = document.documentElement.scrollTop
      setScrollHeight(currentScrollHeight)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const earthTransformedStyle = useMemo(() => {
    const divHeight = divRef.current ? divRef.current.clientHeight : 0
    const translateYValue = scrollHeight * 1.5
    const opacityValue = 1 - translateYValue / divHeight

    return {
      transform: `translateY(${translateYValue}px)`,
      opacity: opacityValue,
    }
  }, [scrollHeight, divRef.current])

  return (
    <>
      <div className={styles.content}>
        <div className={styles.container}>
          <img className={styles.inEarthImage} src={InEarthImage} alt="InEarthImage" />

          <img className={styles.hiddenImage} src={EarthImage} alt="Earth" />
        </div>
      </div>

      <div className={styles.earthTransformed} ref={divRef} style={{ ...earthTransformedStyle }}>
        <div className={styles.container}>
          <img src={EarthImage} alt="Earth" />
        </div>
      </div>
    </>
  )
}

export default React.memo(Earth)
