import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import routing from 'routing/path'
import links from 'constants/links'
import peerLogo from 'assets/PeerLogo.svg'
import peerLogoSmall from 'assets/PeerLogoSmall.svg'
import GetButton from 'components/GetButton'
import QRCodeModal from 'components/Modals/QRCodeModal/index'
import useQRCodeModal from 'components/Modals/QRCodeModal/useQRCodeModal'

import styles from './styles.module.scss'
import Copyright from '../components/Copyright/index'
import Socials from '../components/Socials/index'

function MobileFooter() {
  const { pathname } = useLocation()
  const { isQRCodeModalOpen, setIsQRCodeModalOpen, closeQRCodeModal } = useQRCodeModal()

  const renderLogo = () => (
    <Link to="/">
      {pathname !== routing.withoutAuth.home ? (
        <img src={peerLogoSmall} alt="peer logo" className={styles.peerLogoSmall} />
      ) : (
        <img src={peerLogo} alt="peer logo" className={styles.peerLogo} />
      )}
    </Link>
  )

  const renderTerms = () => (
    <div className={styles.terms}>
      <a href={links.termsService} target="_blank" rel="noreferrer">
        Terms
      </a>
      <span>|</span>
      <a href={links.privacyPolicy} target="_blank" rel="noreferrer">
        Privacy
      </a>
    </div>
  )

  return (
    <footer className={styles.container_mobile}>
      <hr />
      <div className={styles.wrapper_mobile}>
        <div className={styles.line_wrapper}>
          {renderLogo()}
          <Socials />
        </div>
        <div className={styles.line_wrapper}>
          <Copyright />
          {renderTerms()}
        </div>
        <div className={styles.button}>
          <GetButton label="I’M READY" onClick={setIsQRCodeModalOpen} />
        </div>
      </div>
      <QRCodeModal isOpen={isQRCodeModalOpen} onClose={closeQRCodeModal} />
    </footer>
  )
}

MobileFooter.propTypes = {}

export default MobileFooter
