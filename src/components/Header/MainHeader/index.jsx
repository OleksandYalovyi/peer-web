/* eslint-disable react/prop-types */
import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import cls from 'classnames'
import useScroll from 'hooks/useScroll'
import peerLogo from 'assets/PeerLogo.svg'
import peerLogoSmall from 'assets/PeerLogoSmall.svg'
import QRCodeModal from 'components/Modals/QRCodeModal'
import useQRCodeModal from 'components/Modals/QRCodeModal/useQRCodeModal'
import routing from 'routing/path'
import GetButton from 'components/GetButton'
import useCurrentSize from 'hooks/useCurrentSize'
import LittleLeftChevron from 'assets/Home/littleLeftChevron.svg'

import styles from './header.module.scss'

function MainHeader() {
  const { pathname } = useLocation()
  const { scrollDirection } = useScroll()
  const { isQRCodeModalOpen, setIsQRCodeModalOpen, closeQRCodeModal } = useQRCodeModal()
  const ref = useRef('')
  const { width } = useCurrentSize()
  const isMobile = width < 680
  const shouldRenderJobsLink = !pathname.startsWith(routing.withoutAuth.jobs)
  const shouldShowSmallIcon = pathname === routing.withoutAuth.home

  return (
    <header
      className={cls(
        styles.container,
        {
          [styles.hidden]:
            scrollDirection === 'down' && scrollDirection !== 'bottom' && scrollDirection !== 'top',
        },
        {
          [styles.bg]: scrollDirection === 'up' || scrollDirection === 'bottom',
        },
      )}
      ref={ref}
    >
      <div className={styles.main_container}>
        <Link to="/">
          {shouldShowSmallIcon ? (
            <img src={peerLogoSmall} alt="peer logo" className={styles.peerLogoSmall} />
          ) : (
            <img src={peerLogo} alt="peer logo" className={styles.peerLogo} />
          )}
        </Link>
        {shouldRenderJobsLink && (
          <Link
            to={routing.withoutAuth.jobs}
            className={cls({
              [styles.gradientLink]: true,
              [styles.alignStart]: pathname !== routing.withoutAuth.home,
            })}
          >
            WE’RE HIRING. <span>JOIN OUR TEAM</span>
            <img src={LittleLeftChevron} alt="Chevron" />
          </Link>
        )}

        {!isMobile && (
          <div className={styles.get_peer_wrapper}>
            <GetButton label="i'm ready" onClick={setIsQRCodeModalOpen} />
          </div>
        )}
      </div>
      <QRCodeModal isOpen={isQRCodeModalOpen} onClose={closeQRCodeModal} />
    </header>
  )
}

MainHeader.propTypes = {}

export default React.memo(MainHeader)
