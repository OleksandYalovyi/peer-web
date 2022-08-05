import React, { useCallback, useRef } from 'react'
import MainContainer from 'components/MainContainer'
import Arrow from 'assets/arrow-black.svg'
import Modal from 'components/Modal'
import Animated from 'components/Animated'
import PropTypes from 'prop-types'
import AsSeen from './AsSeen/index'
import Video from './VideoSection'
import styles from './styles.module.scss'

const Epic = () => {
  const modal = useRef(null)

  const onClick = useCallback(() => modal.current.open(true), [modal.current])

  return (
    <MainContainer>
      <Animated>
        <div className={styles.title}>An epic, beginning.</div>
      </Animated>
      <Animated>
        <div className={styles.video_link} onClick={onClick}>
          Watch the video
          <img className={styles.arrow} src={Arrow} alt="arrow" />
        </div>
      </Animated>
      <div className={styles.content_wrapper}>
        <Animated>
          <div className={styles.content}>Peer is a metaverse company.</div>
        </Animated>
      </div>
      <Modal ref={modal}>
        <Video />
      </Modal>
    </MainContainer>
  )
}

Epic.propTypes = {}

export default Epic
