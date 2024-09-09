/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import routing from 'routing/path'
import useCurrentSize from 'hooks/useCurrentSize'
import ArrowLeftRounded from 'assets/Home/arrowLeftRounded.svg'
import LittleLeftChevron from 'assets/Home/littleLeftChevron.svg'
import Solar from 'assets/Home/video/solar.webm'
import SolarHigh from 'assets/Home/video/solar1080.webm'
import SolarPreloadImg from 'assets/Home/SolarPreload.png'
import SolarPreloadHighImg from 'assets/Home/SolarPreload1080.png'
import Title from './components/Title'
import styles from './home.module.scss'

function Home() {
  const [sources, setSources] = useState({ video: Solar, image: SolarPreloadImg })
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const { width } = useCurrentSize()
  const isMobile = width < 680

  useEffect(() => {
    const updateVideoSource = () => {
      const screenWidth = window.innerWidth

      if (screenWidth > 768) {
        setSources({ video: SolarHigh, image: SolarPreloadHighImg })
      } else {
        setSources({ video: Solar, image: SolarPreloadImg })
      }
    }

    updateVideoSource()

    window.addEventListener('resize', updateVideoSource)

    return () => {
      window.removeEventListener('resize', updateVideoSource)
    }
  }, [])

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true)
  }

  return (
    <div className={styles.wrapper}>
      <Title />

      <div className={styles.video}>
        <video
          src={sources.video}
          autoPlay
          playsInline
          loop
          muted
          onLoadedData={handleVideoLoaded}
          style={{ display: isVideoLoaded ? 'block' : 'none' }}
        />

        {!isVideoLoaded && <img src={sources.image} alt="Solar preload" />}
      </div>

      {isMobile && (
        <div className={styles.links_container}>
          <Link to={routing.withoutAuth.ourVision} className={styles.largeLink}>
            Our Vision
            <img src={ArrowLeftRounded} alt="Arrow" />
          </Link>
          <Link to={routing.withoutAuth.jobs} className={styles.gradientLink}>
            WE’RE HIRING. <span>JOIN OUR TEAM</span>
            <img src={LittleLeftChevron} alt="Chevron" />
          </Link>
        </div>
      )}
    </div>
  )
}

export default React.memo(Home)
