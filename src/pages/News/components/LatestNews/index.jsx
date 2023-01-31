import React from 'react'

import styles from './latestnews.module.scss'

const LatestNews = () => (
  <div className={styles.wrapper}>
    <div className={styles.news}>
      <div className={styles.mixin}>
        <div className={styles.news_cld}>
          <p className={styles.title}>2023</p>
          <a className={styles.text}>
            Peer Acquires Elite Team of Engineers Behind Zenly’s Popular 3D Maps
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default React.memo(LatestNews)

LatestNews.propTypes = {}
