import React, { useState, useEffect } from 'react'
import T from 'prop-types'
import QRCode from 'react-qr-code'
import Modal from 'components/Modal'
import { IconCLose } from 'components/Icons/Close'
import links from 'constants/links'
import appstore from 'assets/qr/app-store.svg'
import google from 'assets/qr/google.svg'
import styles from './qr_code_modal.module.scss'

function QRCodeModal({ isOpen, onClose }) {
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(`${window.location.origin}/app`)
  }, [window.location.origin])

  return (
    <Modal open={isOpen} onClose={onClose} className={styles.qr_code_wrapper}>
      <div className={styles.container}>
        <div className={styles.description}>Scan to download</div>
        <button className={styles.close} type="button" onClick={onClose}>
          <IconCLose />
        </button>
        <div className={styles.code_container}>
          <QRCode
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            value={url}
            viewBox="0 0 256 256"
            bgColor="rgba(255, 255, 255, 0)"
          />
        </div>
        <div className={styles.store_links_container}>
          <a href={links.appStore} className={styles.store_link}>
            <img src={appstore} alt="app store" />
          </a>
          <a href={links.googlePlay} className={styles.store_link}>
            <img src={google} alt="google play" />
          </a>
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
