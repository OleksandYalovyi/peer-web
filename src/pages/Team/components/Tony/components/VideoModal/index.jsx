import React, { useState, useRef, useEffect } from 'react'
import T from 'prop-types'
import cls from 'classnames'
import YouTube from 'react-youtube'
import useCurrentWidth from 'hooks/useCurrentWidth'

import styles from './styles.module.scss'

const VideoModal = ({ isOpen, onClose }) => {
  const width = useCurrentWidth()
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

  return (
    <div className={cls(isOpen && styles.scroll, styles.wrapper)}>
      <div className={styles.modal} ref={videoRef}>
        <YouTube videoId="yyrSIOmPfTM" opts={videoOptions} />;
      </div>
    </div>
  )
}

VideoModal.propTypes = {
  onClose: T.func,
  isOpen: T.bool,
}

export default React.memo(VideoModal)
