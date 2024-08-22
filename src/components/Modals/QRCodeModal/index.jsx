import React, { useState, useEffect } from 'react'
import T from 'prop-types'
import cn from 'classnames'
import QRCode from 'react-qr-code'
import Modal from 'components/Modal'
import { IconCLose } from 'components/Icons/Close'
import links from 'constants/links'
import appstore from 'assets/qr/app-store.svg'
import google from 'assets/qr/google.svg'
import appStoreImgMin from 'assets/qr/app-store.png'
import googlePlayImgMin from 'assets/qr/google.png'
import ProgressiveImage from './ProgressiveImage'
import styles from './qr_code_modal.module.scss'

function QRCodeModal({ isOpen, onClose }) {
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(`${window.location.origin}/app`)
  }, [window.location.origin])

  return (
    <Modal open={isOpen} onClose={onClose} className={styles.qr_code_wrapper}>
      <div className={styles.container}>
        <button
          className={cn(styles.gradient_border_button, styles.close)}
          type="button"
          onClick={onClose}
        >
          <IconCLose />
        </button>
        <div className={styles.qr_links_wrapper}>
          <div className={styles.code_container}>
            <QRCode
              style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
              value={url}
              viewBox="0 0 256 256"
              bgColor="rgba(255, 255, 255, 0)"
            />
          </div>
          <div className={styles.store_links_container}>
            <a href={links.appStore} className={styles.store_link} target="_blank" rel="noreferrer">
              <ProgressiveImage
                highResolutionSrc={appstore}
                lowResolutionSrc={appStoreImgMin}
                alt="app store"
              />
            </a>
            <a
              href={links.googlePlay}
              className={styles.store_link}
              target="_blank"
              rel="noreferrer"
            >
              <ProgressiveImage
                highResolutionSrc={google}
                lowResolutionSrc={googlePlayImgMin}
                alt="google play"
              />
            </a>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default React.memo(QRCodeModal)

QRCodeModal.propTypes = {
  isOpen: T.bool,
  onClose: T.func,
}
