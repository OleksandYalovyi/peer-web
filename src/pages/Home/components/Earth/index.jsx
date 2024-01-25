import React, { useEffect, useMemo, useRef, useState } from 'react'
import EarhImage from 'assets/Home/earth.png'
import InEarthImage from 'assets/Home/inEarth.png'
import styles from './earth.module.scss'

function Earth() {
  const divRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollHeight = document.documentElement.scrollTop
      setScrollHeight(currentScrollHeight)
    }

    const handleLoad = () => {
      setLoaded(true)
      setTimeout(() => {
        window.addEventListener('scroll', handleScroll)
      }, 50)
    }

    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  const earthTransformedStyle = useMemo(() => {
    const divHeight = divRef.current ? divRef.current.clientHeight : 0
    const translateYValue = scrollHeight * 1.5
    const opacityValue = 1 - translateYValue / divHeight

    return {
      transform: `translateY(${translateYValue}px)`,
      opacity: loaded ? opacityValue : 0,
    }
  }, [scrollHeight, divRef.current, loaded])

  return (
    <>
      <div className={styles.content}>
        <div className={styles.container}>
          <img className={styles.inEarthImage} src={InEarthImage} alt="InEarthImage" />

          <img className={styles.hiddenImage} src={EarhImage} alt="Earth" />
        </div>
      </div>

      <div className={styles.earthTransformed} ref={divRef} style={{ ...earthTransformedStyle }}>
        <div className={styles.container}>
          <img src={EarhImage} alt="Earth" />
        </div>
      </div>
    </>
  )
}

export default React.memo(Earth)
