import React from 'react'

import styles from './title.module.scss'

const Title = () => (
  <div className={styles.wrapper}>
    <div className={styles.title}>News & Media</div>
    <div className={styles.content}>
      This section includes articles, blog posts, and other media that highlight the innovative
      features and benefits of all that we ship. Stay informed about the latest developments at Peer
      and learn more about how our platform is changing the way people connect and communicate
      online.
    </div>
  </div>
)

export default React.memo(Title)

Title.propTypes = {}
