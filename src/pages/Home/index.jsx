/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import ArrowLeftRounded from 'assets/Home/arrowLeftRounded.svg'
import LittleLeftChevron from 'assets/Home/littleLeftChevron.svg'
import Solar from 'assets/Home/video/solar.webm'
import Title from './components/Title'
import styles from './home.module.scss'

function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Title />

          <div className={styles.video}>
            <video src={Solar} autoPlay loop muted />
          </div>
        </div>

        <div className={styles.footer}>
          <a className={styles.largeLink}>
            Our journey with Peer
            <img src={ArrowLeftRounded} alt="Arrow" />
          </a>

          <a className={styles.gradientLink}>
            WE’RE HIRING. JOIN OUR TEAM
            <img src={LittleLeftChevron} alt="Chevron" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Home)
