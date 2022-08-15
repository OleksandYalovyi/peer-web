import React from 'react'
import GraphikBall from 'assets/images/home/graphicball.webp'
import styles from './styles.module.scss'
import AsSeen from './components/AsSeen'

const PlayToLive = () => (
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.col}>
        <h1 className={styles.title}>
          Play to
          <br />
          Live.
        </h1>

        <p className={styles.text}>
          Come alive with an all-new way to share,
          <br />
          create, and experience.
        </p>
        <p className={styles.text}>The beta for iOS drops Fall 2022.</p>
      </div>

      <div className={styles.col}>
        <img src={GraphikBall} alt="GraphikBall" />
      </div>
    </div>

    <div className={styles.row}>
      <AsSeen />
    </div>
  </div>
)

export default PlayToLive
