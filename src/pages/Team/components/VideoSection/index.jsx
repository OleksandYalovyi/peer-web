import React, { useState } from 'react'
import { format } from 'date-fns'
import compareAsc from 'date-fns/compareAsc'
import VideoModal from './components/VideoModal/index'
import Play from '../../../../assets/play.svg'
import styles from './styles.module.scss'

const VideoSection = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <section className={styles.section}>
      {isOpen && <VideoModal onClose={() => setOpen(false)} />}
      <div className={styles.top}>
        <div className={styles.video_wrapper}>
          <div className={styles.video}>
            <div className={styles.play_icon_wrapper} onClick={() => setOpen(true)}>
              <img
                src={Play}
                title="Metaverse Rising, featuring Tony Tran"
                alt="Metaverse Rising, featuring Tony Tran"
                width={30}
                height={29}
                className={styles.play_button}
              />
            </div>
          </div>
          <div className={styles.quote}>
            “The future of the web is information at first sight.”
            <p>Tony Tran, Founder & CEO</p>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.title}>
            Peer is on a mission to transform the way people experience the digital world.
          </div>
          <div className={styles.content}>
            <p>
              Tony created Peer with a single aim—to move the world forward. He envisions a future
              where the internet is a seamlessly integrated presence in our environment that
              enhances and enriches our daily lives.
            </p>
            <p>
              Peer is developing a range of innovative products that use cutting-edge technologies
              like augmented reality and computer vision to allow people to see, share, and interact
              with the web in the real world. By using the physical world as a starting point, he
              believes we can create a new world of boundless innovation and limitless
              possibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(VideoSection)
