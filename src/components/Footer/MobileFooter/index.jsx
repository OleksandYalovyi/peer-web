import React from 'react'
import T from 'prop-types'

import GetButton from 'components/GetButton'
import QRCodeModal from 'components/Modals/QRCodeModal/index'
import useQRCodeModal from 'components/Modals/QRCodeModal/useQRCodeModal'

import styles from './styles.module.scss'
import Copyright from './components/Copyright/index'
import Socials from './components/Socials/index'
import Terms from './components/Terms/index'
import Logo from './components/Logo/index'

function MobileFooter({ showPeerLogo }) {
  const { isQRCodeModalOpen, setIsQRCodeModalOpen, closeQRCodeModal } = useQRCodeModal()

  return (
    <footer className={styles.container_mobile}>
      <hr />
      <div className={styles.wrapper_mobile}>
        <div className={styles.line_wrapper}>
          <Logo showPeerLogo={showPeerLogo} />
          <Socials />
        </div>
        <div className={styles.line_wrapper}>
          <Copyright />
          <Terms />
        </div>
        <div className={styles.button}>
          <GetButton label="I’M READY" onClick={setIsQRCodeModalOpen} />
        </div>
      </div>
      <QRCodeModal isOpen={isQRCodeModalOpen} onClose={closeQRCodeModal} />
    </footer>
  )
}

MobileFooter.propTypes = {
  showPeerLogo: T.bool.isRequired,
}

export default MobileFooter
