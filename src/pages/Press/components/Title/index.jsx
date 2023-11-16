import React from 'react'

import styles from './title.module.scss'

const Title = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>News, Media, & Insights</h1>

    <div className={styles.content}>
      <h2>
        This section includes articles, blog posts, and other media that highlight the innovative
        features and benefits of all that we ship.
      </h2>

      <p>
        Stay informed about the latest developments at Peer and learn more about how our platform is
        changing the way people connect and communicate online.
      </p>
    </div>
  </div>
)

export default React.memo(Title)
