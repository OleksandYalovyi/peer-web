import React from 'react'
import ReactPlayer from 'react-player/youtube'

import styles from './style.module.scss'

function VideoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles['video-wrapper']}>
          <ReactPlayer url="https://youtu.be/YzV4gUFyK2w" playing width="100%" height="100%" />
        </div>
      </div>
    </section>
  )
}

export default VideoSection
