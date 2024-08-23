import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from 'context/theme'
import useCurrentSize from 'hooks/useCurrentSize'
import useQRCodeModal from 'components/Modals/QRCodeModal/useQRCodeModal'
import GetButton from 'components/GetButton'
import QRCodeModal from 'components/Modals/QRCodeModal/index'
import links from 'constants/links'
import peerLogo from 'assets/PeerLogo.svg'
import routing from 'routing/path'
import styles from './footer.module.scss'
import { externalLinks, renderIcon } from '../footer.utils'

function HomeFooter() {
  const [hovered, setHovered] = useState('')
  const { isLight } = useTheme()
  const { width } = useCurrentSize()
  const { pathname } = useLocation()
  const { isQRCodeModalOpen, setIsQRCodeModalOpen, closeQRCodeModal } = useQRCodeModal()

  const isMobile = width < 680

  const renderLogo = () => (
    <Link to="/">
      <img src={peerLogo} alt="peer logo" className={styles.peerLogo} />
    </Link>
  )

  const renderCopyright = () => (
    <div className={styles.copyright}>© {new Date().getFullYear()} Peer</div>
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

  const renderSocial = () => (
    <div className={styles.social_container}>
      <div className={styles.socials}>
        {externalLinks.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            onMouseEnter={() => setHovered(item.name)}
            onMouseLeave={() => setHovered('')}
            rel="noreferrer"
          >
            {renderIcon(item.name, isLight, hovered, width)}
          </a>
        ))}
      </div>
    </div>
  )

  return (
    <>
      {pathname !== routing.withoutAuth.home && !isMobile && (
        <footer className={styles.container}>
          <div className={styles.copyright_container}>
            {renderLogo()}
            {renderCopyright()}
          </div>
          {/* <div className={styles.left_container}>{renderTerms()}</div> */}
          {renderSocial()}
        </footer>
      )}
      {isMobile && (
        <footer className={styles.container_mobile}>
          <div className={styles.line_wrapper}>
            {renderLogo()}
            {renderSocial()}
          </div>
          <div className={styles.line_wrapper}>
            {renderCopyright()}
            {renderTerms()}
          </div>
          <GetButton label="I’M READY" onClick={setIsQRCodeModalOpen} />
          <QRCodeModal isOpen={isQRCodeModalOpen} onClose={closeQRCodeModal} />
        </footer>
      )}
    </>
  )
}

HomeFooter.propTypes = {}

export default HomeFooter
