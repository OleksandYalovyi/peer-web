import React, { useState } from 'react'
import VideoModal from './components/VideoModal/index'
import Play from '../../../../assets/play.svg'
import styles from './styles.module.scss'

const Tony = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <section className={styles.section}>
      {isOpen && <VideoModal onClose={() => setOpen(false)} />}
      <div className={styles.top}>
        <div>
          <div className={styles.video} onClick={() => setOpen(true)}>
            <img
              src={Play}
              title="Metaverse Rising, featuring Tony Tran"
              alt="Metaverse Rising, featuring Tony Tran"
              width={30}
              height={29}
              className={styles.play_button}
            />
          </div>
          <div className={styles.quote}>
            “For 3 decades, we’ve made information available at the tip of anyone’s fingertips. The
            next revolution is making information available at first sight. That’s what we’re all
            about.”
            <p>Tony Tran, Founder & CEO</p>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.title}>
            Tony Tran is on a mission to transform the way people experience the digital world.{' '}
          </div>
          <div className={styles.content}>
            <p>
              Tony created Peer with a single aim—to move the world forward. He envisions a future
              where the internet is a seamlessly integrated presence in our environment that
              enhances and enriches our daily lives.
            </p>
            <p>
              o achieve this, Peer is developing a range of innovative products that use
              cutting-edge technologies like augmented reality and computer vision to allow people
              to see, share, and interact with the web in the real world. By using the physical
              world as a starting point, he believes we can create a new world of boundless
              innovation and limitless possibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Tony)
