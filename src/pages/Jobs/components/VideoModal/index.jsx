import React, { useRef, useEffect } from 'react'
import T from 'prop-types'
import cls from 'classnames'
import YouTube from 'react-youtube'
import useCurrentSize from 'hooks/useCurrentSize'

import styles from './styles.module.scss'

function VideoModal({ isOpen, onClose }) {
  const { width } = useCurrentSize()
  const videoHeight = width > 1170 ? 1170 / 1.77 : width / 1.77
  const videoOptions = {
    height: videoHeight,
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }
  const videoRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (videoRef.current && !videoRef.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [videoRef])

  const isMobile = width < 1170

  useEffect(() => {
    document.body.classList.toggle(styles.modalOpen)

    return () => {
      document.body.classList.remove(styles.modalOpen)
    }
  }, [isOpen])

  return (
    <div className={cls(isOpen && styles.scroll, styles.wrapper)}>
      <div className={styles.modal} ref={videoRef}>
        <div
          className={cls(styles.close, isMobile && styles.mobile_close)}
          onClick={() => onClose()}
        />
        <YouTube videoId="yyrSIOmPfTM" opts={videoOptions} />
      </div>
    </div>
  )
}

VideoModal.propTypes = {
  onClose: T.func,
  isOpen: T.bool,
}

export default React.memo(VideoModal)
