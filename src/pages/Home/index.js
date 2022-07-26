import React, { useCallback, useRef } from 'react'
import MainContainer from 'components/MainContainer'
import Arrow from 'assets/arrow-black.svg'
import Modal from 'components/Modal'
import ReactPlayer from 'react-player/youtube'
import PropTypes from 'prop-types'
import Video from './VideoSection'
import styles from './styles.module.scss'

const Home = () => {
  const modal = useRef(null)

  const onClick = useCallback(() => modal.current.open(true), [modal.current])

  return (
    <MainContainer>
      <div className={styles.title}>An epic, beginning.</div>
      <div className={styles.video_link} onClick={onClick}>
        Watch the video
        <img className={styles.arrow} src={Arrow} alt="arrow" />
      </div>
      <div className={styles.content}>Peer is a metaverse company.</div>
      <div className={styles.section_container}>
        <div className={styles.quote_section_wrapper}>
          <div className={styles.quote_section}>
            <div className={styles.quote}>
              It’s time to
              <br />
              up-level our concept of what personal computing is.
            </div>
            <div className={styles.text_container}>
              <div className={styles.header_wrapper}>
                <div className={styles.name}>Tony Tran</div>
                <div className={styles.position}>Founder and CEO</div>
              </div>
              <div className={styles.text}>
                “What we dream of doing with computing today has evolved which means the tools we
                use will need to evolve. It’s time to up-level our concept of what personal
                computing is so that those dreams can manifest. We are at the tail end of a cycle.
                The crossroad ahead is a key determinant of our collective future. ”
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal ref={modal}>
        <Video />
      </Modal>
    </MainContainer>
  )
}

Home.propTypes = {}

export default Home
