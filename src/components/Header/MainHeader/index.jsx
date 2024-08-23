/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import cls from 'classnames'
import useScroll from 'hooks/useScroll'
import peerLogo from 'assets/PeerLogo.svg'
import peerLogoSmall from 'assets/PeerLogoSmall.svg'
import QRCodeModal from 'components/Modals/QRCodeModal'
import useQRCodeModal from 'components/Modals/QRCodeModal/useQRCodeModal'
import routing from 'routing/path'
import GetButton from 'components/GetButton'
import styles from './header.module.scss'
import useCurrentSize from '../../../hooks/useCurrentSize'

function NavItems({ name, link, openedMenu, clickHandler }) {
  return (
    <div
      className={cls(styles.nav_item, { [styles.open]: openedMenu === name })}
      onClick={() => clickHandler(name)}
    >
      {link ? <NavLink to={link}>{name}</NavLink> : name}
    </div>
  )
}

function MainHeader() {
  const { pathname } = useLocation()
  const { scrollDirection } = useScroll()
  const [openedMenu, setIsOpen] = useState('')
  const { isQRCodeModalOpen, setIsQRCodeModalOpen, closeQRCodeModal } = useQRCodeModal()
  const ref = useRef('')
  const { width } = useCurrentSize()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const isMobile = width < 680

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen('')
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })

  const logoClickHandler = () => {
    setIsOpen('')
    setIsMobileOpen(false)
  }

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
        <div className={styles.main_container__left}>
          <Link to="/">
            {pathname === routing.withoutAuth.home ? (
              <img
                src={peerLogoSmall}
                alt="peer logo"
                className={styles.peerLogoSmall}
                onClick={logoClickHandler}
              />
            ) : (
              <img
                src={peerLogo}
                alt="peer logo"
                className={styles.peerLogo}
                onClick={logoClickHandler}
              />
            )}
          </Link>
        </div>
        <div className={styles.main_container__right}>
          {!isMobile && (
            <div className={styles.get_peer_wrapper}>
              <GetButton label="I’M READY" onClick={setIsQRCodeModalOpen} />
            </div>
          )}
        </div>
      </div>
      <QRCodeModal isOpen={isQRCodeModalOpen} onClose={closeQRCodeModal} />
    </header>
  )
}

MainHeader.propTypes = {}

export default React.memo(MainHeader)
